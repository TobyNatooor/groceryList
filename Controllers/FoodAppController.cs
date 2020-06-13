using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace foodapp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GroceryListController : ControllerBase
    {
        private readonly ILogger<GroceryListController> _logger;

        public GroceryListController(ILogger<GroceryListController> logger, IHostingEnvironment env)
        {
            _logger = logger;
            Data = new DataSave(Path.Combine(env.WebRootPath, "Data.Text"));
        }

        DataSave Data;

        [HttpGet("all")]
        public IEnumerable<GroceryList> Get()
        {
            return Data.GetGroceryList();
        }

        [HttpPost("add")]
        public void add(GroceryList g)
        {

            Data.AddItem(g);
        }

         [HttpPost("delete")]
        public void delete(GroceryList g)
        {
            Data.DeleteItem(g.id);
        }
    }
}
