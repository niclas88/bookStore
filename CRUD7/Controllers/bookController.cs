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
    public class bookController : ApiController
    {
        private CRUD7Context db = new CRUD7Context();

        // GET api/Books
        public List<bookDTO> GetBooks()
        {
            // Get all books using a LINQ question
            // collect them in rawBooks
            // (Please note: Method calls can not be done in a LINQ question)
            var rawBooks =
               from b in db.books
               select new bookDTOtemp()
               {
                   Id = b.Id,
                   title = b.title,
                   authors = b.Authors,
                   genres = b.Genres,
                   bookRatings = b.ratings,
                   bookImages = b.images,
                   year = b.year,
                   description = b.description,
                   stock = b.stock,
                   isbn = b.isbn
               };

            // Now loop through our rawBooks (a list of BookDTOtemp objects)
            // and create a list of BookDTO objects
            // use the helper funtion getAuthorNames to transform
            // a list of authors to a list of authornames (strings)
            var Books = new List<bookDTO>();
            foreach (var book in rawBooks)
            {
                Books.Add(
                    new bookDTO()
                    {
                        Id = book.Id,
                        title = book.title,
                        description = book.description,
                        year = book.year,
                        stock = book.stock,
                        isbn = book.isbn,
                        authorNames = getAuthorNames(book.authors),
                        genreNames = getGenreNames(book.genres),
                        images = getImage(book.bookImages),
                        ratings = getRating(book.bookRatings)
                        
                    }

                );
            }

            return Books;
        }

        private List<string> getAuthorNames(ICollection<author> authors)
        {
            var authorNames = new List<string>();
            foreach (var author in authors)
            {
                authorNames.Add(author.name);
            }
            return authorNames;
        }

        private List<string> getGenreNames(ICollection<genre> genres)
        {
            var genreNames = new List<string>();
            foreach (var genre in genres)
            {
                genreNames.Add(genre.name);
            }
            return genreNames;
        }

        private List<string> getImage(ICollection<image> images)
        {
            var imageNames = new List<string>();
            foreach (var image in images)
            {
                imageNames.Add(image.imageUrl);
            }
            return imageNames;
        }

        private List<double> getRating(ICollection<rating> bookRating)
        {
            var ratings = new List<double>();
            foreach (var r in bookRating)
            {
                ratings.Add(r.rate);
            }
            return ratings;
        }


        // GET api/Books/5
        [ResponseType(typeof(book))]
        public IHttpActionResult GetBook(int id)
        {
            var rawBooks =
               from b in db.books
               where b.Id == id
               select new bookDetailDTOtemp()
               {
                   Id = b.Id,
                   year = b.year,
                   isbn = b.isbn,
                   stock = b.stock,
                   title = b.title,
                   authorNames = b.Authors,
                   bookRatings = b.ratings,
                   bookImages = b.images,
               };

            var rawBook = rawBooks.First();

            if (rawBook == null)
            {
                return NotFound();
            }

            var book = new bookDetailDTO()
            {
                Id = rawBook.Id,
                year = rawBook.year,
                isbn = rawBook.isbn,
                stock = rawBook.stock,
                title = rawBook.title,
                authorNames = getAuthorNames(rawBook.authorNames)
            };

            return Ok(book);
        }

        // PUT api/Books/5
        public IHttpActionResult PutBook(int id, book book)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != book.Id)
            {
                return BadRequest();
            }

            db.Entry(book).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookExists(id))
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

        // POST api/Books
        [ResponseType(typeof(book))]
        public IHttpActionResult PostBook(book book)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.books.Add(book);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = book.Id }, book);
        }

        // DELETE api/Books/5
        [ResponseType(typeof(book))]
        public IHttpActionResult DeleteBook(int id)
        {
            book book = db.books.Find(id);
            if (book == null)
            {
                return NotFound();
            }

            db.books.Remove(book);
            db.SaveChanges();

            return Ok(book);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BookExists(int id)
        {
            return db.books.Count(e => e.Id == id) > 0;
        }
    }
}