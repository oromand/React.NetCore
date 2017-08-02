using Microsoft.AspNetCore.Mvc;

namespace HockeyPersonnalAssistant.Web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
