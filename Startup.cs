using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNet.StaticFiles;

namespace Sample
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseIISPlatformHandler();
            app.UseStatusCodePagesWithReExecute("/index.html");
            app.UseDefaultFiles();
            app.UseStaticFiles(); 
            
            
        }
        public static void Main(string[] args) => WebApplication.Run<Startup>(args);
    }
}
