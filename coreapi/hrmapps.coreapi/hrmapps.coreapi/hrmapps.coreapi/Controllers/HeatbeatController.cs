using Microsoft.AspNetCore.Mvc;
using hrmapps.coreapi.Models;

namespace hrmapps.coreapi.Controllers
{
  [ApiVersion("1.0")]
  [Route("api/v{v:apiVersion}/heartbeat")]
  [ApiController]
  public class HeatbeatController : ControllerBase
  {
    [HttpGet]
    public ActionResult<HeartbeatDTO> GetHeartbeat()
    {
      return Ok(new HeartbeatDTO() { Message = "Api is up!", Datetime = System.DateTime.UtcNow });
    }
  }
}
