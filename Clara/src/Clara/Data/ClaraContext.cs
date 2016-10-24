using Clara.Models;
using Microsoft.EntityFrameworkCore;

namespace Clara.Data
{
    public class ClaraContext : DbContext
    {
        public ClaraContext(DbContextOptions<ClaraContext> options) : base(options)
        {
        }

        public DbSet<Day> Days { get; set; }

        public DbSet<Schedule> Schedules { get; set; }

        public DbSet<Track> Tracks { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Day>().ToTable("Day");
            modelBuilder.Entity<Schedule>().ToTable("Schedule");
            modelBuilder.Entity<Track>().ToTable("Track");
        }
    }
}
