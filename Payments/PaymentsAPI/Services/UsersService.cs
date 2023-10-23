using PaymentsAPI.Entities;

namespace PaymentsAPI.Services;

public class UsersService
{
    private readonly IList<User> _usersList;
    private readonly PaymentsService _paymentsService;

    public UsersService(PaymentsService paymentsService)
    {
        _paymentsService = paymentsService;

        var paymentsList = _paymentsService.GetDataFromXlsx();

        var lightPayments = paymentsList.Where(x => x.Type.ToLower() == "luz");
        var waterPayments = paymentsList.Where(x => x.Type.ToLower() == "água");
        var internetPayments = paymentsList.Where(x => x.Type.ToLower() == "internet");

        _usersList = new List<User>() 
        { 
            new User() { Name = "Alberto Quintero", GridA = lightPayments, GridB = waterPayments, GridC = internetPayments },
            new User() { Name = "Alicia Cardin", GridA = waterPayments, GridB = internetPayments, GridC = lightPayments },
            new User() { Name = "Amandio Igrejas", GridA = internetPayments, GridB = lightPayments, GridC = waterPayments },
        };
    }

    public IList<User> GetUsersList()
    {
        return _usersList;
    }

    public User GetUserByName(string name)
    {
        var user =_usersList.Where(x => x.Name.ToLower() == name.ToLower()).FirstOrDefault() ?? throw new ArgumentNullException("Usuário inexistente");
        return user;
    }
}
