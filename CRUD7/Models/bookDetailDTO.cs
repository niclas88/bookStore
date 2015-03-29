using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CRUD7.Models
{
    public class bookDetailDTO
    {
        public int Id { get; set; }
        public string title { get; set; }
        public int year { get; set; }
        public string isbn { get; set; }
        public int stock { get; set; }

        public List<string> authorNames { get; set; }
        public List<string> genreNames { get; set; }
        public List<double> ratings { get; set; }
        public List<string> images { get; set; }
    }
}