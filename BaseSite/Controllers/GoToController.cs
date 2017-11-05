using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BaseSite.Controllers
{
    public class GoToController : Controller
    {
        // GET: GoTo
        public ActionResult LinkedIn()
        {
            return Redirect("https://www.linkedin.com/in/benjaminwki/");
        }
    }
}