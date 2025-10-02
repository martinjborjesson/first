using Microsoft.Extensions.FileProviders;

internal class Program
{
    private static void Main(string[] args)
    {
        WebApplicationBuilder builder = WebApplication.CreateBuilder(args);
        builder.Services.AddControllers();

        WebApplication app = builder.Build();

        // app.UseHttpsRedirection();
        app.UseAuthorization();
        app.MapControllers();

        string? assetsPath = Path.Combine(app.Environment.ContentRootPath, "..", "assets", "app");
        app.UseStaticFiles(new StaticFileOptions
        {
            FileProvider = new PhysicalFileProvider(assetsPath),
            RequestPath = "/assets"
        });

        app.Run();
    }
}