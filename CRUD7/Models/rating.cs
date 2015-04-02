using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CRUD7.Models
{
    public class rating
    {
        public int Id { get; set; }
        [Required]
        public double rate { get; set; }
        public int voteCount { get; set; }
        public int totalRating { get; set; }
        public ICollection<book> Books { get; set; }
        public rating()
        {
            Books = new HashSet<book>();
        }
    }
}