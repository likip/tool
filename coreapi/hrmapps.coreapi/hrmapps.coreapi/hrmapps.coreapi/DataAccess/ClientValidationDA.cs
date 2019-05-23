using hrmapps.coreapi.Models;
using System;
using Dapper;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Data;

namespace hrmapps.coreapi.DataAccess
{
  public class ClientValidationDA
  {
    public SPResult<ClientDTO> ClientDetail(string clientName, string connString)
    {
      var param = new DynamicParameters();
      param.Add("ClientName", clientName);
      param.Add("Result", dbType: DbType.String, direction: ParameterDirection.Output, size: 6);


      using (IDbConnection db = new SqlConnection(connString))
      {
        ClientDTO clientInfo = db.Query<ClientDTO>("sp_getClientExistence", param, commandType: CommandType.StoredProcedure).FirstOrDefault();
        string result = param.Get<String>("Result");

        return new SPResult<ClientDTO>()
        {
          Result = result,
          ReturnValue = result.Equals("001") ? 1 : -1,
          Table = result.Equals("001") ? clientInfo : null
        };
      }
    }
  }
}
