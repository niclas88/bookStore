using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using CRUD7.Models;

namespace CRUD7.Controllers
{
    public class imageController : ApiController
    {
        private CRUD7Context db = new CRUD7Context();

        // GET: api/image
        public IQueryable<image> Getimages()
        {
            return db.images;
        }

        // GET: api/image/5
        [ResponseType(typeof(image))]
        public IHttpActionResult Getimage(int id)
        {
            image image = db.images.Find(id);
            if (image == null)
            {
                return NotFound();
            }

            return Ok(image);
        }

        // PUT: api/image/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putimage(int id, image image)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != image.Id)
            {
                return BadRequest();
            }

            db.Entry(image).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!imageExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/image
        [ResponseType(typeof(image))]
        public IHttpActionResult Postimage(image image)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.images.Add(image);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = image.Id }, image);
        }

        // DELETE: api/image/5
        [ResponseType(typeof(image))]
        public IHttpActionResult Deleteimage(int id)
        {
            image image = db.images.Find(id);
            if (image == null)
            {
                return NotFound();
            }

            db.images.Remove(image);
            db.SaveChanges();

            return Ok(image);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool imageExists(int id)
        {
            return db.images.Count(e => e.Id == id) > 0;
        }
    }
}