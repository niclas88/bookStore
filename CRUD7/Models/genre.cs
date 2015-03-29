using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CRUD7.Models
{
    public class genre
    {
        public int Id { get; set; }
        [Required]
        public string name { get; set; }
        public string description { get; set; }
        public ICollection<book> Books { get; set; }
        public genre()
        {
            Books = new HashSet<book>();
        }
    }
}