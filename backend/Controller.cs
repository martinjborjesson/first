using Microsoft.AspNetCore.Mvc;
using Krydda;

[ApiController]
[Route("campsite")]
public class ShelterController : ControllerBase
{
    private readonly IWebHostEnvironment _env;
    private string _badRequestMessage = "No file uploaded.";
    private string _notFoundMessage = "File not found.";
    private string _okMessage = "File uploaded:";

    public ShelterController(IWebHostEnvironment env)
    {
        _env = env;
    }

    [HttpPost("{fileName}")]
    public async Task<IActionResult> Upload(string fileName, IFormFile file)
    {
        if (file == null || file.Length == 0)
        {
            Colored.Write("BadRequest", ConsoleColor.Black, ConsoleColor.Red);
            Colored.WriteLine($" {_badRequestMessage}", ConsoleColor.White);
            return BadRequest(_badRequestMessage);
        }

        string? targetDir = Path.Combine(_env.ContentRootPath, "..", "assets", "app", "campsite-images");
        Directory.CreateDirectory(targetDir);

        string? targetPath = Path.Combine(targetDir, fileName);

        using (var stream = System.IO.File.Create(targetPath))
        {
            await file.CopyToAsync(stream);
        }

        Colored.Write("Success", ConsoleColor.Black, ConsoleColor.Green);
        Colored.WriteLine($"{_okMessage} {file.Length / 1000}kb at {targetDir}", ConsoleColor.White);
        return Ok(new { success = true, path = targetPath });
    }

    [HttpGet("{fileName}")]
    public IActionResult Get(string fileName)
    {
        string? targetPath = Path.Combine(_env.ContentRootPath, "..", "assets", "app", "campsite-images", fileName);

        if (!System.IO.File.Exists(targetPath))
        {
            Colored.WriteLine($"{_notFoundMessage} ({targetPath})", ConsoleColor.Yellow);
            return NotFound();
        }

        byte[]? fileBytes = System.IO.File.ReadAllBytes(targetPath);

        Colored.WriteLine($"FileServed: {fileBytes.Length / 1000}kb  {targetPath}", ConsoleColor.Cyan);
        return File(fileBytes, "image/jpeg");
    }
}