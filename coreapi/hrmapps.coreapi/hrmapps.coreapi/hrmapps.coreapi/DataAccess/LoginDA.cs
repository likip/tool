using hrmapps.coreapi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using hrmapps.coreapi.Utilities;
using Dapper;
using System.Data;
using System.Data.SqlClient;

namespace hrmapps.coreapi.DataAccess
{
  public class LoginDA
  {
    public SPResult<LoginDTO> GetLocalLogin(LoginDTO loginDetails, string connString)
    {
      string sql = @"sp_authenticateUser";
      var p = new DynamicParameters();
      string password = Utility.DecryptCode(loginDetails.Password);

      p.Add("UserName", Utility.DecryptCode(loginDetails.UserName));
      p.Add("Result", dbType: DbType.String, direction: ParameterDirection.Output, size: 6);


      using (IDbConnection db = new SqlConnection(connString))
      {
        LoginDTO loginInfo = db.Query<LoginDTO>(sql, p, commandType: CommandType.StoredProcedure).FirstOrDefault();
        string result = p.Get<String>("Result");
        return ValidateUserDetails(loginInfo, password, connString, result);
      }

    }
    
    private SPResult<LoginDTO> ValidateUserDetails(LoginDTO loginInfo, string password, string connString, string result)
    {

      if (result.Equals("006"))
      {
        return new SPResult<LoginDTO>()
        {
          Result = result,
          ReturnValue = -1,
          Table = null
        };
      }
      else
      {
        if (loginInfo.LoginTypeName != "ClientLogin")
        {
          return new SPResult<LoginDTO>
          {
            Result = "015",
            ReturnValue = -1,
            Table = null
          };
        }
        else if (loginInfo.ChangePasswordOnNextLogin)
        {
          return new SPResult<LoginDTO>
          {
            Result = "017",
            ReturnValue = -1,
            Table = null
          };
        }
        else
        {
          string messageCode = ValidateUserDetails(loginInfo, password, connString);
          loginInfo.PasswordHash = string.Empty;
          return new SPResult<LoginDTO>
          {
            Result = messageCode,
            ReturnValue = messageCode.Equals("001") ? 1 : -1,
            Table = messageCode.Equals("001") ? loginInfo : null
          };
        }
      }
    }

    private string ValidateUserDetails(LoginDTO loginInfo, string password, string connString)
    {
      string messageCode = string.Empty;

      if (loginInfo != null)
      {
        messageCode = loginInfo.IsLocked ? "002" : string.Empty;
        if (!messageCode.Equals("002"))
        {
          if (loginInfo.PasswordExpiryDuration <= loginInfo.DateDiff)
          {
            messageCode = "003";
            return messageCode;
          }
          else
          {
            if (!Utility.ComparePasswordHash(loginInfo.PasswordHash, password))
            {
              int count = Convert.ToInt32(loginInfo.IncorrectPasswordAttempt) + 1;
              int result = UpdateIncorrectPasswordAttempts(connString, count, loginInfo.UserName);
              if (loginInfo.IncorrectPasswordAttemptConfig - 1 > loginInfo.IncorrectPasswordAttempt)
              {
                messageCode = "004";
                return messageCode;
              }
              else
              {
                messageCode = "005";
                return messageCode;
              }
            }
            else
            {
              int result = UpdateValidLogin(connString, loginInfo.UserName);
              messageCode = "001";
              return messageCode;
            }

          }
        }

      }
      return messageCode;
    }

    private int UpdateIncorrectPasswordAttempts(string connString, int count, string userName)
    {
      int result = 0;
      string sql = @"sp_updateIncorrectPasswordAttempts";
      var p = new DynamicParameters();
      p.Add("UserName", userName);
      p.Add("Count", count);

      using (IDbConnection db = new SqlConnection(connString))
      {
        result = db.Execute(sql, p, commandType: CommandType.StoredProcedure);
      }
      return result;

    }

    private int UpdateValidLogin(string connString, string username)
    {
      int result = 0;
      string sql = @"sp_updateValidLogin";
      var p = new DynamicParameters();
      p.Add("UserName", username);

      using (IDbConnection db = new SqlConnection(connString))
      {
        result = db.Execute(sql, p, commandType: CommandType.StoredProcedure);
      }
      return result;

    }
  }
}
