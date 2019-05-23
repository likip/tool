using hrmapps.coreapi.DataAccess;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using hrmapps.coreapi.Models;

namespace hrmapps.coreapi.Controllers
{
  [ApiVersion("1.0")]
  [Route("api/v{v:apiVersion}/clientvalidation")]
  [ApiController]
  public class ClientValidationController : ControllerBase
  {
    private ClientValidationDA _clientValidationDA;

    [HttpGet]
    public ActionResult GetClientDetail([FromQuery(Name = "clientName")] string clientName)
    {

      try
      {
        string connString = Startup.Configuration["MetadataDatabase:ConnectionString"];
        _clientValidationDA = new ClientValidationDA();

        var result = _clientValidationDA.ClientDetail(clientName, connString);
        if (result.ReturnValue == -1)
        {
          return BadRequest(new ErrorResponseDTO()
          {
            MessageCode = result.Result,
            ErrorType = "Bad Request",
            RequestId = HttpContext.TraceIdentifier.ToString()
          });
        }
        else
        {
          SuccessResponseDTO<ClientDTO> loginSuccessDTO = new SuccessResponseDTO<ClientDTO>().CreateSuccessResponse(result.Table, result.Result, HttpContext.TraceIdentifier.ToString());
          return Ok(loginSuccessDTO);
        }
      }
      catch (Exception ex)
      {
        //_logger.LogCritical(ex.ToString());
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
