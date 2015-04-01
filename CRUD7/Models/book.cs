using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CRUD7.Models
{
    public class book
    {
        public int Id { get; set; }
        [Required]
        public string title { get; set; }
        public string description { get; set; }
        public int year { get; set; }
        public int stock { get; set; }
        public string isbn { get; set; }
        public List<string> bookAuthorBookTitle { get; set; }
        public ICollection<author> authors { get; set; }
        public ICollection<genre> genres { get; set; }
        public ICollection<image> images { get; set; }
        public ICollection<rating> ratings { get; set; }
        public book()
        {
            authors = new HashSet<author>();
            genres = new HashSet<genre>();
            images = new HashSet<image>();
            ratings = new HashSet<rating>();
        }
    }
}