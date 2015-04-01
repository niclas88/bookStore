using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CRUD7.Models
{
    public class bookPostDTO
    {
        public int Id { get; set; }
        [Required]
        public string title { get; set; }
        public string description { get; set; }
        public int year { get; set; }
        public int stock { get; set; }
        public string isbn { get; set; }
        public ICollection<int> authorIds { get; set; }
        public ICollection<int> genreIds { get; set; }
        public ICollection<int> imagesIds { get; set; }
        public ICollection<int> ratingsIds { get; set; }
    }
}