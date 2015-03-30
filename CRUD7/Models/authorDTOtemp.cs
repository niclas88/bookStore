using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CRUD7.Models
{
    public class authorDTOtemp
    {
        public int Id { get; set; }
        public string name { get; set; }

        public ICollection<book> books { get; set; }
    }
}