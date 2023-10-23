using ExcelDataReader;
using PaymentsAPI.Entities;
using System.Text;

namespace PaymentsAPI.Services;

public class PaymentsService
{
    private readonly IConfiguration _configuration;

    public PaymentsService(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public IEnumerable<Payment> GetDataFromXlsx()
    {
        Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);        

        var paymentsList = new List<Payment>();        

        using var stream = File.OpenRead(_configuration["PathToData"]);
        
        using var reader = ExcelReaderFactory.CreateOpenXmlReader(stream);
        
        do
        {
            while (reader.Read())
            {                
                if (reader.Depth > 0)
                {
                    var payment = new Payment()
                    {
                        PaymentId = int.Parse(reader.GetValue(0).ToString()),
                        Type = reader.GetValue(1).ToString(),
                        Value = (double)reader.GetValue(2)
                    };

                    paymentsList.Add(payment);
                }
            }
        } while (reader.NextResult());

        return paymentsList;
    }
}
