using Dapper;
using hrmapps.coreapi.Models;
using hrmapps.coreapi.Utilities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace hrmapps.coreapi.DataAccess
{

  public class ChangePasswordDA
  {
    public SPResult<ChangePasswordDTO> GetChangePassword(ChangePasswordDTO changeDetails, Guid userId, string connString)
    {
      string sql = @"sp_changePassword";
      var p = new DynamicParameters();
      string oldpassword = Utility.DecryptCode(changeDetails.OldPassword);
      string newPassword = Utility.DecryptCode(changeDetails.NewPassword);
      p.Add("UserId", userId);
      p.Add("Result", dbType: DbType.String, direction: ParameterDirection.Output, size: 6);

      using (IDbConnection db = new SqlConnection(connString))
      {
        ChangePasswordDTO changeInfo = db.Query<ChangePasswordDTO>(sql, p, commandType: CommandType.StoredProcedure).FirstOrDefault();
        string result = p.Get<String>("Result");
        return ValidateUserDetails(changeInfo, oldpassword, newPassword, connString, result);
      }

    }

    private SPResult<ChangePasswordDTO> ValidateUserDetails(ChangePasswordDTO changeInfo, string oldpassword, string newPassword, string connString, string result)
    {
      string messageCode = string.Empty;
      if (result.Equals("006"))
      {
        return new SPResult<ChangePasswordDTO>()
        {
          Result = result,
          ReturnValue = -1,
          Table = null
        };
      }
      else
      {
        string messagecode = ValidateUserDetails(changeInfo, oldpassword, newPassword, connString);
        changeInfo.PasswordHash = string.Empty;
        return new SPResult<ChangePasswordDTO>
        {
          Result = messagecode,
          ReturnValue = messagecode.Equals("010") ? 1 : -1,
          Table = messagecode.Equals("010") ? changeInfo : null
        };
      }
    }

    private string ValidateUserDetails(ChangePasswordDTO changeInfo, string oldpassword, string newPassword, string connString)
    {
      string messageCode = string.Empty;
      if (changeInfo != null)
      {
        if (Utility.ComparePasswordHash(changeInfo.PasswordHash, oldpassword))
        {
          if (oldpassword == newPassword)
          {
            messageCode = "007";
            return messageCode;
          }
          else
          {
            var OldPasswords = verifyNewPwd(connString, changeInfo.UserName);
            int pwdMatch = 0;
            foreach (var password in OldPasswords)
            {
              if (Utility.ComparePasswordHash(password, newPassword))
              {
                pwdMatch = 1;
                break;
              }
            }
            if (pwdMatch == 1)
            {
              messageCode = "008";
              return messageCode;
            }
            else
            {
              string newPasswordHash = Utility.GeneratePasswordHash(newPassword);
              if (changeInfo.CountPwds >= changeInfo.MaximumRetainPassword)
              {
                int pwdHisId = changeInfo.PwdHisId;
                string result = EditUserLogin(connString, changeInfo, pwdHisId, newPasswordHash);

                messageCode = result;
                return messageCode;

              }
              else
              {
                int pwdHisId = 0;
                string result = EditUserLogin(connString, changeInfo, pwdHisId, newPasswordHash);
                messageCode = result;
                return messageCode;
              }
            }

          }
        }

        else
        {
          messageCode = "009";
          return messageCode;
        }
      }
      return messageCode;
    }

    private string EditUserLogin(string connString, ChangePasswordDTO changeInfo, int pwdHisId, string newPasswordHash)
    {
      string resultCode = string.Empty;
      string sql = @"sp_editUserLogin";
      var p = new DynamicParameters();
      p.Add("UserId", changeInfo.UserId);
      p.Add("UserName", changeInfo.UserName);
      p.Add("PwdHisId", pwdHisId);
      p.Add("LoginId", changeInfo.LoginId);
      p.Add("PasswordHash", changeInfo.PasswordHash);
      p.Add("NewPasswordHash", newPasswordHash);
      p.Add("Date", changeInfo.Date);
      p.Add("CreatedBy", changeInfo.CreatedBy);
      p.Add("LastUpdatedBy", changeInfo.LastUpdatedBy);
      p.Add("Result", dbType: DbType.String, direction: ParameterDirection.Output, size: 6);

      using (IDbConnection db = new SqlConnection(connString))
      {
        int result = db.Execute(sql, p, commandType: CommandType.StoredProcedure);
        resultCode = p.Get<String>("Result");
      }
      return resultCode;
    }


    private List<string> verifyNewPwd(string connString, string userName)
    {
      List<string> rec = new List<string>();
      string sql = @"sp_verifyNewPwd";
      var p = new DynamicParameters();
      p.Add("UserName", userName);

      using (IDbConnection db = new SqlConnection(connString))
      {
        rec = db.Query<string>(sql, p, commandType: CommandType.StoredProcedure).ToList();
      }
      return rec;
    }

  }
}

