using HockeyPersonnalAssistant.Data;
using HockeyPersonnalAssistant.Models.Offer;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Linq;

namespace HockeyPersonnalAssistant.Controllers
{
    [Produces("application/json")]
    [Route("api/Offer")]
    public class OfferController : Controller
    {

        private readonly ApplicationDbContext _context;
        private readonly ILogger _logger;   //https://docs.microsoft.com/en-us/aspnet/core/fundamentals/logging

        //Remember DI
        public OfferController(ApplicationDbContext context, ILogger<OfferController> logger)
        {
            _context = context;
            _logger = logger;
        }

        [HttpGet]
        public async System.Threading.Tasks.Task<IActionResult> Get()
        {
            try
            {
                var result = _context.Offers.ToList().Select(o => new OfferViewModel() { Id = o.Id, Description = o.Description, Region = "PACA - Hautes-Alpes" });
                var returnResult = System.Threading.Tasks.Task.Run(() => result);

                return Ok(await returnResult);
            }
            catch (System.Exception exc)
            {
                _logger.LogError(exc.Message);
                throw;
            }
        }
    }
}