namespace Clara.Data
{
    public static class ClaraDbInitializer
    {
        public static void Initialize(ClaraContext context)
        {
            context.Database.EnsureCreated();
            context.SaveChanges();
        }
    }
}
