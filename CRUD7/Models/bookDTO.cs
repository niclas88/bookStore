using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CRUD7.Models
{
    public class bookDTO
    {
        public int Id { get; set; }
        public string title { get; set; }
        public int year { get; set; }
        public int stock { get; set; }
        public string isbn { get; set; }
        public string description { get; set; }

        public List<author> authorNames { get; set; }
        public List<genre> genreNames { get; set; }
        public List<image> images { get; set; }
        public List<double> ratings { get; set; }
    }
}