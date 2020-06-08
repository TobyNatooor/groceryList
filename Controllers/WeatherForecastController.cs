using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace foodapp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GroceryListController : ControllerBase
    {
        private readonly ILogger<GroceryListController> _logger;

        public GroceryListController(ILogger<GroceryListController> logger)
        {
            _logger = logger;
        }

/*         [HttpGet]
        public IEnumerable<GroceryList> Get()
        {

        } */
    }
}
