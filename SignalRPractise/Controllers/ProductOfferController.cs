using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using SignalRPractise.Hubs;

namespace SignalRPractise.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ProductOfferController : ControllerBase
  {
    private readonly IHubContext<MessageHub, IMessageHubClient> _messageHub;

    public ProductOfferController(IHubContext<MessageHub, IMessageHubClient> messageHub)
    {
      _messageHub = messageHub;
    }

    [HttpPost]
    public string SendOffers()
    {
      List<string> offers = new List<string>();
      offers.Add("20% Off on IPhone 12");
      offers.Add("15% Off on HP Pavillion");
      offers.Add("25% Off on Samsung Smart TV");
      _messageHub.Clients.All.SendOffersToUser(offers);
      return "Offers sent successfully to all users!";

    }
  }
}