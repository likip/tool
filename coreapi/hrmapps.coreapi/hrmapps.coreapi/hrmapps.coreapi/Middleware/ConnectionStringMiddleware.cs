using hrmapps.coreapi.Utilities;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Primitives;
using System.IO;
using System.Net;
using System.Threading.Tasks;

namespace hrmapps.coreapi.Middleware
{
  public class ConnectionStringMiddleware
  {
    private readonly RequestDelegate _next;

    public ConnectionStringMiddleware(RequestDelegate next)
    {
      _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
      //Exclude middleware processing for these routes
      if (context.Request.Path.Value.Contains("heartbeat") ||
          context.Request.Path.Value.Contains("connectionstring") ||
          context.Request.Path.Value.Contains("clientval") ||
          context.Request.Path.Value.Contains("swagger"))
      {
        await _next(context);
      }
      else
      {
        StringValues connectionString;
        string decryptedConnString;

        byte[] key = EncryptionUtility.GetHash(Startup.Configuration["EncryptionKeys:ConnectionStringKey"]);
        byte[] iv = EncryptionUtility.GetMD5Hash(Startup.Configuration["EncryptionKeys:ConnectionStringKey"]);

        if (context.Request.Headers.TryGetValue("X-Special-Info", out connectionString))
        {
          try
          {
            decryptedConnString = EncryptionUtility.DecryptStringFromBytes_Aes(connectionString.ToString(), key, iv);
            //decryptedConnString = "Data Source=localhost;Initial Catalog=Reconsmart_Client_DB;Integrated Security=SSPI";
            context.Request.Headers.Add("ConnectionString", new StringValues(decryptedConnString));
          }
          catch
          {
            await HandleExceptionAsync(context);

          }

          await _next(context);

        }

        else
        {
          await HandleExceptionAsync(context);
        }
      }

    }

    private async Task HandleExceptionAsync(HttpContext context)
    {
      var response = context.Response;
      response.StatusCode = (int)HttpStatusCode.BadRequest;
      await context.Response.WriteAsync("Request details invalid!");
    }

  }
}
