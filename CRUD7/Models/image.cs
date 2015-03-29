using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CRUD7.Models
{
    public class image
    {
        public int Id { get; set; }
        [Required]
        public string imageUrl { get; set; }
        public ICollection<book> Books { get; set; }
        public image()
        {
            Books = new HashSet<book>();
        }
    }
}