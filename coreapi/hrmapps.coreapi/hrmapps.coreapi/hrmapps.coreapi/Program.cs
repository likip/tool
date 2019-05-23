using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;

namespace hrmapps.coreapi
{
  public class Program
  {
    public static void Main(string[] args)
    {
      var host = CreateWebHostBuilder(args).Build();
      var logger = host.Services.GetRequiredService<ILogger<Program>>();
      logger.LogInformation("Initializing .net core API host...");
      try
      {
        host.Run();
      }
      catch (Exception ex)
      {
        logger.LogCritical(ex.ToString());
        throw;
      }
    }

    public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .ConfigureLogging(logging =>
                {
                  logging.ClearProviders();
                  logging.SetMinimumLevel(Microsoft.Extensions.Logging.LogLevel.Trace);
                  logging.AddConsole();
                });
  }
}
