using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Clara.Models
{
    public class Day
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public DateTime Date { get; set; }

        public Schedule[] Schedules { get; set; }
    }
}
