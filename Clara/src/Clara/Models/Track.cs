using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Clara.Models
{
    public class Track
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public TimeSpan StartTime { get; set; }

        public TimeSpan EndTime { get; set; }

        public string Title { get; set; }
    }
}
