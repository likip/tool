using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hrmapps.coreapi.Models
{
    public class ClientDTO
    {
        public Guid ClientId { get; set; }
        public string ClientName { get; set; }
        public string DatabaseName { get; set; }
        public string Connectionstring { get; set; }
    }
}
