using hrmapps.coreapi.DataAccess;
using hrmapps.coreapi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Primitives;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hrmapps.coreapi.Controllers
{
  [ApiVersion("1.0")]
  [Route("api/v{v:apiVersion}/login")]
  [ApiController]
  public class PasswordManageController : ControllerBase
  {
    //Injecting Ilogger into the controller for logging
    private readonly ILogger<PasswordManageController> _logger;
    private ChangePasswordDA _changepasswordDA;
    //private ResetPasswordDA _resetpasswordDA;
    private const string _messageCodePrefix = "USP-US-";

    //Constructer for initializing the logger
    public PasswordManageController(ILogger<PasswordManageController> logger)
    {
      _logger = logger;
    }

    [HttpPost]
    [Route("changepassword")]
    public ActionResult GetChangePassword([FromBody] ChangePasswordDTO changeInfo, [FromQuery(Name = "userId")] Guid userId)
    {
      StringValues clientConnectionString;

      try
      {
        if (HttpContext.Request.Headers.TryGetValue("ConnectionString", out clientConnectionString))
        {
          if (ModelState.IsValid)
          {
            _changepasswordDA = new ChangePasswordDA();


            var result = _changepasswordDA.GetChangePassword(changeInfo, userId, clientConnectionString);
            if (result.ReturnValue == -1)
            {
              return BadRequest(new ErrorResponseDTO()
              {
                MessageCode = _messageCodePrefix + result.Result,
                ErrorType = "Bad Request",
                RequestId = HttpContext.TraceIdentifier.ToString()
              });
            }
            else
            {
              return Ok(new StatusInfoDTO()
              {
                MessageCode = _messageCodePrefix + result.Result,
                RequestId = HttpContext.TraceIdentifier.ToString()

              });
            }

          }
          else
          {
            return BadRequest();
          }
        }
        else
        {
          return BadRequest();
        }
      }
      catch (Exception ex)
      {
        _logger.LogCritical(ex.ToString());
        return StatusCode(500, new ErrorResponseDTO()
        {
          MessageCode = "Inernal server error",
          RequestId = HttpContext.TraceIdentifier.ToString(),
          ErrorType = ex.Message.ToString()
        });
      }

    }
  }
}
