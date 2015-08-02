using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ApplicationSignatures.Startup))]
namespace ApplicationSignatures
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
