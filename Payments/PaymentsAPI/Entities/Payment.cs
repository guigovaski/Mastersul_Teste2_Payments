namespace PaymentsAPI.Entities;

public class Payment
{
    public int PaymentId { get; set; }
    public string Type { get; set; }
    public double Value { get; set; }
}
