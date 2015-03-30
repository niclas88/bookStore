using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace CRUD7.Models
{
    public class author
    {
        public int Id { get; set; }
        [Required]
        public string name { get; set; }
        public ICollection<book> Books { get; set; }
        public author()
        {
            Books = new HashSet<book>();

        }
    }
}