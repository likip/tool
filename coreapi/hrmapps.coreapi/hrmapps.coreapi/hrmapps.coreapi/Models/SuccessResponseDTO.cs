using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hrmapps.coreapi.Models
{
  public class SuccessResponseDTO<T>
  {
    public StatusInfoDTO StatusInfo { set; get; }
    /// <summary>
    /// Data object of API
    /// </summary>
    public T Response { get; set; }

    public SuccessResponseDTO<T> CreateSuccessResponse(T Response, string Status, string RequestId = "")
    {
      this.StatusInfo = new StatusInfoDTO()
      {
        RequestId = RequestId,
        Status = "Success",
        MessageCode = Status
      };
      this.Response = Response;
      return this;
    }
  }
}
