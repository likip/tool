using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Swashbuckle.AspNetCore.Swagger;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using hrmapps.coreapi.Middleware;

namespace hrmapps.coreapi
{
  public class Startup
  {
    public static IConfiguration Configuration { get; private set; }
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
      services.AddApiVersioning(o =>
      {
        o.ReportApiVersions = true;
        o.DefaultApiVersion = new ApiVersion(1, 0);
      });

      //Adding Swagger Generator
      services.AddSwaggerGen(c =>
      {
        c.SwaggerDoc("v1", new Info { Title = "My API", Version = "v1" });
      });

      //Adding CORS
      // services.AddCors();
      services.AddCors(Options =>
      {
        Options.AddPolicy(MyAllowSpecificOrigins, builder =>
             builder.AllowAnyOrigin()
                     .AllowAnyHeader()
                     .AllowAnyMethod()
        );
      });

    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
        app.UseCors(builder =>
            builder.AllowAnyOrigin()
                    .AllowAnyHeader()
                    .AllowAnyMethod()
        );
      }
      else
      {
        // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
        app.UseHsts();
      }

      //Adding Swagger
      app.UseSwagger();

      app.UseSwaggerUI(c =>
      {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "apcapps.copreapi");
      });
      //app.UseAPIAuthenticationMiddleware();
      app.UseConnectionStringMiddleware();
      //app.UseUserPermissionMiddleware();
      app.UseStatusCodePages();
      app.UseCors(MyAllowSpecificOrigins);
      app.UseMvc();
      
    }
  }
}
