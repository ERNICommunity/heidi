using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Clara.Models
{
    public class Schedule
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public List<Track> Tracks { get; set; } 
    }
}
