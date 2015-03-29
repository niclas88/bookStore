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
        public ICollection<author> Authors { get; set; }
        public ICollection<genre> Genres { get; set; }
        public ICollection<image> images { get; set; }
        public ICollection<rating> ratings { get; set; }
        public book()
        {
            Authors = new HashSet<author>();
            Genres = new HashSet<genre>();
            images = new HashSet<image>();
            ratings = new HashSet<rating>();
        }
    }
}