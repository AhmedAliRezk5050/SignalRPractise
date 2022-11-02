using Microsoft.AspNetCore.SignalR;

namespace SignalRPractise.Hubs;
public class ViewHub : Hub
{
  private static int _viewCount;

  public async Task NotifyWatching()
  {
    _viewCount++;

    await Clients.All.SendAsync("ViewCountUpdate", _viewCount);
  }

  public async Task GetLastValue()
  {
    await Clients.All.SendAsync("LastValueUpdate", _viewCount);
  }

  public override async Task OnConnectedAsync()
  {
    _viewCount++;

    await Clients.All.SendAsync("ViewCountUpdate", _viewCount);

    await base.OnConnectedAsync();
  }

  public override async Task OnDisconnectedAsync(Exception? exception)
  {
    _viewCount--;
    
    await Clients.All.SendAsync("ViewCountUpdate", _viewCount);

    await base.OnDisconnectedAsync(exception);
  }
}