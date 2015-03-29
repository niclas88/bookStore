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
    public class genreController : ApiController
    {
        private CRUD7Context db = new CRUD7Context();

        // GET: api/genre
        public IQueryable<genre> Getgenres()
        {
            return db.genres;
        }

        // GET: api/genre/5
        [ResponseType(typeof(genre))]
        public IHttpActionResult Getgenre(int id)
        {
            genre genre = db.genres.Find(id);
            if (genre == null)
            {
                return NotFound();
            }

            return Ok(genre);
        }

        // PUT: api/genre/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putgenre(int id, genre genre)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != genre.Id)
            {
                return BadRequest();
            }

            db.Entry(genre).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!genreExists(id))
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

        // POST: api/genre
        [ResponseType(typeof(genre))]
        public IHttpActionResult Postgenre(genre genre)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.genres.Add(genre);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = genre.Id }, genre);
        }

        // DELETE: api/genre/5
        [ResponseType(typeof(genre))]
        public IHttpActionResult Deletegenre(int id)
        {
            genre genre = db.genres.Find(id);
            if (genre == null)
            {
                return NotFound();
            }

            db.genres.Remove(genre);
            db.SaveChanges();

            return Ok(genre);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool genreExists(int id)
        {
            return db.genres.Count(e => e.Id == id) > 0;
        }
    }
}