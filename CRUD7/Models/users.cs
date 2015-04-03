using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace CRUD7.Models
{
    public class users
    {
        public int Id { get; set; }
        [Required]
        public string userName { get; set; }
        public string password { get; set; }
    }
}