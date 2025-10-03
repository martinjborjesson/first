namespace First.Models;

public class CampsiteDto
{
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public Coordinates Coordinates { get; set; } = new Coordinates();
    public bool FirePlace { get; set; }
    public bool FireWood { get; set; }
    public bool Shelter { get; set; }
    public bool Water { get; set; }
    public bool DrinkableWater { get; set; }
    public string Note { get; set; } = string.Empty;
    public bool Toilet { get; set; }
}