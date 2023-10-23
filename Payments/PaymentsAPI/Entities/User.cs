namespace PaymentsAPI.Entities;

public class User
{
    public string Name { get; set; }
    public IEnumerable<Payment> GridA { get; set; }
    public IEnumerable<Payment> GridB { get; set; }
    public IEnumerable<Payment> GridC { get; set; }
}
