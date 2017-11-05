using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BaseSite.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "DS Dev Test";

            return View();
        }


        public int MyValue
        {
            get
            {
                var value = TempData["CurrentCounter"];

                if (value is null)
                    return 0;
                else
                    return (int)value;
            }
            set
            {
                TempData["CurrentCounter"] = value;
            }
        }
    }
}
