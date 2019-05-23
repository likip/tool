using Microsoft.AspNetCore.Builder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hrmapps.coreapi.Middleware
{
  public static class CustomMiddlewareExtensions
  {
    public static IApplicationBuilder UseConnectionStringMiddleware(this IApplicationBuilder builder)
    {
      builder.UseMiddleware<ConnectionStringMiddleware>();


      return builder; 
    }
  }
}
