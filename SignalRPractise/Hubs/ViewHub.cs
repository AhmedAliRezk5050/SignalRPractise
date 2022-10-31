using Microsoft.AspNetCore.SignalR;

namespace SignalRPractise.Hubs;
public class ViewHub : Hub
{
  private static int _viewCount = 0;

  public async Task NotifyWatching()
  {
    _viewCount++;

    await Clients.All.SendAsync("ViewCountUpdate", _viewCount);
  }

  public async Task GetLastValue()
  {
    await Clients.All.SendAsync("LastValueUpdate", _viewCount);
  }
}