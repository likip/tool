using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hrmapps.coreapi.Models
{
  public class SPResult<T>
  {
    public string Result { get; set; }
    public int ReturnValue { get; set; }
    public T Table { get; set; }

    public Dictionary<string, string> OtherData { get; set; }
  }
}
