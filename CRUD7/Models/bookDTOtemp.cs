using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CRUD7.Models
{
    public class bookDTOtemp
    {
        public int Id { get; set; }
        public string title { get; set; }
        public int year { get; set; }
        public string description { get; set; }
        public string isbn { get; set; }
        public int stock { get; set; }

        public ICollection<author> authors { get; set; }
        public ICollection<genre> genres { get; set; }
        public ICollection<image> bookImages { get; set; }
        public ICollection<rating> bookRatings { get; set; }
    }
}