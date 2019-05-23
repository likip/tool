using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Primitives;
using hrmapps.coreapi.Utilities;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace hrmapps.coreapi.Controllers
{
  [ApiVersion("1.0")]
  [Route("api/v{v:apiVersion}/connectionstring")]
  [ApiController]
  public class ConnectionStringController : ControllerBase
  {
    //Injecting Ilogger into the controller for logging
    private readonly ILogger<ConnectionStringController> _logger;

    //Constructer for initializing the logger
    public ConnectionStringController(ILogger<ConnectionStringController> logger)
    {
      _logger = logger;
    }

    /// <summary>
    /// Get encrypted connection string from plain text connection string. Pass the plaintext connection string in header 'StringToEncrypt'
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    public ActionResult<string> GetEncryptedConnectionString()
    {
      StringValues connectionStringToEncrypt;
      byte[] key = EncryptionUtility.GetHash(Startup.Configuration["EncryptionKeys:ConnectionStringKey"]);
      byte[] iv = EncryptionUtility.GetMD5Hash(Startup.Configuration["EncryptionKeys:ConnectionStringKey"]);

      if (HttpContext.Request.Headers.TryGetValue("StringToEncrypt", out connectionStringToEncrypt))
      {
        try
        {
          string encryptedConnString = Convert.ToBase64String(EncryptionUtility.EncryptStringToBytes_Aes(connectionStringToEncrypt.ToString(), key, iv));
          return Ok(encryptedConnString);
        }
        catch (Exception ex)
        {
          _logger.LogCritical(ex.ToString());
          return BadRequest();
        }
      }
      else
      {
        return BadRequest();
      }

    }

  }
}
