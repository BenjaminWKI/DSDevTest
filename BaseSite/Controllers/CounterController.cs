using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Runtime.Serialization.Json;
using Newtonsoft.Json;
using BaseSite.Models;
using BaseSite.DBContext;
using System.Linq;

namespace BaseSite.Controllers
{
    public class CounterController : ApiController
    {
        private BaseSiteDBEntities db = new BaseSiteDBEntities();

        [HttpGet]
        public HttpResponseMessage GetCounterValue()
        {
            var response = Request.CreateResponse(HttpStatusCode.OK);
            Models.Counter testing = new Models.Counter { currentNumber = GetCounterFromDb() };


            response.Content = new StringContent(JsonConvert.SerializeObject(testing));
            return response;
        }

        [HttpPost, ActionName("Increment")]
        public HttpResponseMessage Increment()
        {
            var counterDb = GetCurrentCounter();
            if (counterDb != null)
            {
                counterDb.Counter += 1;
                db.SaveChanges();
            }
            var response = Request.CreateResponse(HttpStatusCode.OK);
            Models.Counter testing = new Models.Counter { currentNumber = GetCounterFromDb() };

            response.Content = new StringContent(JsonConvert.SerializeObject(testing));
            return response;
        }

        [HttpPost, ActionName("Decrement")]
        public HttpResponseMessage Decrement()
        {
            GetCurrentCounter().Counter -= 1;
            db.SaveChanges();
            var response = Request.CreateResponse(HttpStatusCode.OK);
            Models.Counter testing = new Models.Counter { currentNumber = GetCounterFromDb() };

            response.Content = new StringContent(JsonConvert.SerializeObject(testing));
            return response;
        }

        private CurrentCounter GetCurrentCounter()
        {
            return db.CurrentCounters.SingleOrDefault(x => x.Id == 0);
        }

        private int GetCounterFromDb()
        {
            var counter = GetCurrentCounter();
            if (counter != null)
                return GetCurrentCounter().Counter;
            else
                return -1;
        }

        //}
        //    // GET api/values
        //    public IEnumerable<string> Get()
        //    {
        //        return new string[] { "value1", "value2" };
        //    }

        //    // GET api/values/5
        //    public string Get(int id)
        //    {
        //        return "value";
        //    }

        //    // POST api/values
        //    public void Post([FromBody]string value)
        //    {
        //    }

        //    // PUT api/values/5
        //    public void Put(int id, [FromBody]string value)
        //    {
        //    }

        //    // DELETE api/values/5
        //    public void Delete(int id)
        //    {
        //    }
    }
}
