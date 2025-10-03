using Microsoft.AspNetCore.Mvc;
using Krydda;
using First.Models;
using System.Text.Json;

namespace First.Controllers;

[ApiController]
[Route("campsite")]
public class CampsiteController : ControllerBase
{
    private readonly IWebHostEnvironment _env;
    private string _badRequestMessage = "No file uploaded.";
    private string _notFoundMessage = "File not found.";
    private string _okMessage = "File uploaded:";

    public CampsiteController(IWebHostEnvironment env)
    {
        _env = env;
    }

    [HttpPost("image/{fileName}")]
    public async Task<IActionResult> Upload(string fileName, IFormFile file)
    {
        if (file == null || file.Length == 0)
        {
            Colored.Write("BadRequest", ConsoleColor.Black, ConsoleColor.Red);
            Colored.WriteLine($": {_badRequestMessage}", ConsoleColor.DarkGray);
            return BadRequest(_badRequestMessage);
        }

        string targetDir = Path.Combine(_env.ContentRootPath, "data", "campsite-images");
        Directory.CreateDirectory(targetDir);

        string targetPath = Path.Combine(targetDir, fileName);

        using (var stream = System.IO.File.Create(targetPath))
        {
            await file.CopyToAsync(stream);
        }

        string dataPath = Path.Combine(_env.ContentRootPath, "data", "db.json");

        if (System.IO.File.Exists(dataPath))
        {
            var json = System.IO.File.ReadAllText(dataPath);
            var campsites = JsonSerializer.Deserialize<List<Campsite>>(
                json,
                new JsonSerializerOptions { PropertyNameCaseInsensitive = true }
            ) ?? new List<Campsite>();

            var id = Path.GetFileNameWithoutExtension(fileName);
            var campsite = campsites.FirstOrDefault(c => c.Id == id);

            if (campsite != null)
            {
                campsite.Image = fileName;

                var updatedJson = JsonSerializer.Serialize(
                    campsites,
                    new JsonSerializerOptions
                    {
                        WriteIndented = true,
                        PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                    }
                );
                System.IO.File.WriteAllText(dataPath, updatedJson);
            }
        }

        Colored.Write("Success", ConsoleColor.Black, ConsoleColor.Green);
        Colored.WriteLine($": {_okMessage} {file.Length / 1000}kb at {targetDir}", ConsoleColor.DarkGray);
        return Ok(new { success = true, path = targetPath });
    }

    [HttpGet("image/{fileName}")]
    public IActionResult Get(string fileName)
    {
        string targetPath = Path.Combine(_env.ContentRootPath, "data", "campsite-images", fileName);

        if (!System.IO.File.Exists(targetPath))
        {
            Colored.WriteLine($"{_notFoundMessage} ({targetPath})", ConsoleColor.Red);
            return NotFound();
        }

        byte[] fileBytes = System.IO.File.ReadAllBytes(targetPath);

        Colored.WriteLine($"FileServed: {fileBytes.Length / 1000}kb - {fileName}", ConsoleColor.DarkCyan);
        return File(fileBytes, "image/jpeg");
    }

    [HttpGet]
    public IActionResult GetCampsites()
    {
        string dataPath = Path.Combine(_env.ContentRootPath, "data", "db.json");

        if (!System.IO.File.Exists(dataPath))
        {
            Colored.WriteLine($"{_notFoundMessage} ({dataPath})", ConsoleColor.Red);
            return NotFound("No campsite data found.");
        }

        var json = System.IO.File.ReadAllText(dataPath);

        Colored.WriteLine($"FileServed: {dataPath}", ConsoleColor.Cyan);
        return Content(json, "application/json");
    }

    [HttpPost("add")]
    public IActionResult AddCampsite([FromBody] CampsiteDto dto)
    {

        if (string.IsNullOrWhiteSpace(dto.Name))
        {
            Colored.WriteLine("Ignorerar tomt campsite.", ConsoleColor.Yellow);
            return BadRequest("Campsite måste ha ett namn");
        }

        var dataPath = Path.Combine(_env.ContentRootPath, "data", "db.json");
        List<Campsite> campsites = [];

        if (System.IO.File.Exists(dataPath))
        {
            Colored.WriteLine("Debug: System.IO.File.Exists(dataPath) = true", ConsoleColor.Green);
            var json = System.IO.File.ReadAllText(dataPath);

            Colored.WriteLine($"json: {json}", ConsoleColor.White);

            if (!string.IsNullOrWhiteSpace(json))
            {
                try
                {
                    Colored.WriteLine("string.IsNullOrWhiteSpace(json) = false", ConsoleColor.Red);
                    campsites = JsonSerializer.Deserialize<List<Campsite>>(
                        json,
                        new JsonSerializerOptions { PropertyNameCaseInsensitive = true }
                    ) ?? new List<Campsite>();

                    Colored.WriteLine($"Debug: campsites.count: {campsites.Count}", ConsoleColor.Yellow);
                    Colored.WriteLine($"Debug: campsites.count: {campsites[0].Id}", ConsoleColor.Yellow);
                    Colored.WriteLine($"Debug: campsites.count: {campsites[0].Name}", ConsoleColor.Yellow);
                }
                catch (Exception ex)
                {
                    Colored.WriteLine($"Fel vid läsning av db.json: {ex.Message}", ConsoleColor.Red);
                    return StatusCode(500, "Kunde inte läsa campsites från db.json");
                }
            }
        }

        Colored.WriteLine($"Debug: Pre campsites check, count: {campsites.Count}", ConsoleColor.White);
        Colored.WriteLine($"Debug: Pre campsites{campsites[0].Id}", ConsoleColor.White);
        Colored.WriteLine($"Debug: Pre campsites{campsites[0].Name}", ConsoleColor.White);

        campsites = campsites
            .Where(c => !string.IsNullOrWhiteSpace(c.Id) || !string.IsNullOrWhiteSpace(c.Name))
            .ToList();

        Colored.WriteLine($"Debug: Post campsites check, count: {campsites.Count}", ConsoleColor.White);

        var maxId = campsites
            .Where(c => !string.IsNullOrWhiteSpace(c.Id))
            .Select(c => int.TryParse(c.Id, out int id) ? id : 0)
            .DefaultIfEmpty(0)
            .Max();

        Colored.WriteLine($"Debug: Post maxId check, count: {maxId}", ConsoleColor.White);

        var newCampsite = new Campsite
        {
            Id = (maxId + 1).ToString("D4"),
            Name = dto.Name,
            Description = dto.Description,
            Coordinates = dto.Coordinates,
            FirePlace = dto.FirePlace,
            FireWood = dto.FireWood,
            Shelter = dto.Shelter,
            Water = dto.Water,
            DrinkableWater = dto.DrinkableWater,
            Note = dto.Note,
            Toilet = dto.Toilet,
            Image = null
        };

        campsites.Add(newCampsite);

        var updatedJson = JsonSerializer.Serialize(
            campsites,
            new JsonSerializerOptions
            {
                WriteIndented = true,
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase
            }
        );

        System.IO.File.WriteAllText(dataPath, updatedJson);

        Colored.Write("Success", ConsoleColor.Black, ConsoleColor.Green);
        Colored.WriteLine($": Campsite #{newCampsite.Id} added.", ConsoleColor.DarkGray);

        return Ok(new { success = true, id = newCampsite.Id, campsite = newCampsite });
    }
}