using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Primitives;
using hrmapps.coreapi.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace hrmapps.coreapi.Controllers
{
  [ApiVersion("1.0")]
  [Route("api/v{v:apiVersion}/login")]
  [ApiController]
  public class LoginController : ControllerBase
  {
    //Injecting Ilogger into the controller for logging
    private readonly ILogger<LoginController> _logger;
    private LoginDA _loginDA;
    private const string _messageCodePrefix = "USP-US-";

    //Constructer for initializing the logger
    public LoginController(ILogger<LoginController> logger)
    {
      _logger = logger;
    }

    [HttpPost]
    [Route("locallogin")]
    public async Task<ActionResult> GetLocalLogin([FromBody] LoginDTO loginInfo)
    {
      StringValues clientConnectionString;
      try
      {
        if (HttpContext.Request.Headers.TryGetValue("ConnectionString", out clientConnectionString))
        {
          if (ModelState.IsValid)
          {
            _loginDA = new LoginDA();

            var result = _loginDA.GetLocalLogin(loginInfo, clientConnectionString);
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
              result.Table.AuthorizationToken = GenearteJWTToken.GenerateToken(result.Table.UserId.ToString());
              dynamic response = await GenearteJWTToken.GenerateToken();
              if (response.ToString() != "Token Invalid")
                result.Table.AuthenticationToken = ((Newtonsoft.Json.Linq.JValue)((Newtonsoft.Json.Linq.JProperty)((Newtonsoft.Json.Linq.JContainer)response).Last).Value).Value.ToString();
              else
                return BadRequest();
              SuccessResponseDTO<LoginDTO> loginSuccessDTO = new SuccessResponseDTO<LoginDTO>().CreateSuccessResponse(result.Table, _messageCodePrefix + result.Result, HttpContext.TraceIdentifier.ToString());
              return Ok(loginSuccessDTO);
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
