﻿using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SignalRChat.Startup))]
namespace SignalRChat
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            //ConfigureAuth(app);
            app.MapSignalR();
        }
    }
}
