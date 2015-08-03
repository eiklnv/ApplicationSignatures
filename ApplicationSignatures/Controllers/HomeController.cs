using ApplicationSignatures.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ApplicationSignatures.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            //string filePath = Server.MapPath(Url.Content("~/Content/test.json"));
            //using (StreamReader r = new StreamReader(filePath))
            //{
            //    ViewBag.Model = r.ReadToEnd();
            //}

            ViewBag.Model = LoadJson().Take(100);

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        //public string LoadJson()
        //{
        //    string filePath = Server.MapPath(Url.Content("~/Content/test.json"));
        //    using (StreamReader r = new StreamReader(filePath))
        //    {
        //        return r.ReadToEnd();
        //    }
        //}
        
        public JsonResult GetJson()
        {
            var apps = LoadJson();

            return Json(apps.Take(100), JsonRequestBehavior.AllowGet);
        }

        private List<ApplicationSignatureViewModel> LoadJson()
        {
            string filePath = Server.MapPath(Url.Content("~/Content/test.json"));
            using (StreamReader r = new StreamReader(filePath))
            {
                string json = r.ReadToEnd();
                List<ApplicationSignatureViewModel> items = JsonConvert.DeserializeObject<List<ApplicationSignatureViewModel>>(json);

                return items;
            }
        }
    }
}