namespace First.Models;

public class Campsite
{
    public string Id { get; set; } = "";
    public string Name { get; set; } = "";
    public string? Image { get; set; }
    public string Description { get; set; } = "";
    public Coordinates Coordinates { get; set; } = new();
    public bool FirePlace { get; set; }
    public bool FireWood { get; set; }
    public bool Shelter { get; set; }
    public bool Water { get; set; }
    public bool DrinkableWater { get; set; }
    public string Note { get; set; } = "";
    public bool Toilet { get; set; }
}