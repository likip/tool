using System;

namespace hrmapps.coreapi.Models
{
  public class StatusInfoDTO
  {
    public string RequestId { get; set; }
    public string Status { get; set; }
    public string ClientName { get; set; }
    public string MessageCode { get; set; }
    public DateTime Timestamp { get; set; }
    public int ReturnValue { get; set; }

    public StatusInfoDTO()
    {
      Timestamp = DateTime.Now;
      this.RequestId = Guid.NewGuid().ToString();
    }
  }
}
