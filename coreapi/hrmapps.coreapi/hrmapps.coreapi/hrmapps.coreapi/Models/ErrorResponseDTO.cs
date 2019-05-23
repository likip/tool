using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hrmapps.coreapi.Models
{
    public class ErrorResponseDTO
    {
      /// <summary>
      /// Gets or Sets RequestId
      /// </summary>
      public string RequestId { get; set; }

      public string Status { get; set; }

      /// <summary>
      /// Gets or Sets ClientName
      /// </summary>
      public string ClientName { get; set; }

      /// <summary>
      /// Gets or Sets ErrorType
      /// </summary>
      public string ErrorType { get; set; }

      /// <summary>
      /// Gets or Sets Message
      /// </summary>
      public string MessageCode { get; set; }

      /// <summary>
      /// Gets or Sets Timestamp
      /// </summary>
      public DateTime? Timestamp { get; set; }

      public ErrorResponseDTO()
      {

        Timestamp = DateTime.Now;
        this.RequestId = Guid.NewGuid().ToString();
      }

    }
}
