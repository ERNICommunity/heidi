using System;

namespace Clara.Models
{
    public class Day
    {
        public DateTime Date { get; set; }

        public Schedule[] Schedules { get; set; }
    }
}
