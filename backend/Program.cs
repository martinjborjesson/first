using System.Text.Json;
using Microsoft.Extensions.FileProviders;

internal class Program
{
    private static void Main(string[] args)
    {
        WebApplicationBuilder builder = WebApplication.CreateBuilder(args);
        builder.Services.AddControllers()
            .AddJsonOptions(o =>
            {
                o.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
            });

        WebApplication app = builder.Build();

        app.UseAuthorization();
        app.MapControllers();

        string? assetsPath = Path.Combine(app.Environment.ContentRootPath, "data");
        app.UseStaticFiles(new StaticFileOptions
        {
            FileProvider = new PhysicalFileProvider(assetsPath),
            RequestPath = "/assets"
        });

        app.Run();
    }
}