using HTTPClient.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HTTPClient.Controllers
{
    public class HeroesController : ApiController
    {
        public IEnumerable<Hero> Get()
        {
            return new[]
            {
                new Hero { Id=1, Name="Hero 1" },
                new Hero { Id=2, Name="Hero 2" },
                new Hero { Id=3, Name="Hero 3" }
            };
        }

        public Hero Post(Hero hero)
        {
            hero.Id = 57;
            return hero;
        }
    }
}
