using Microsoft.AspNetCore.SignalR;

namespace SignalRPractise.Hubs;

public interface IViewHub
{
  Task ViewCountUpdate(int viewCount);
  Task LastValueUpdate(int viewCount);
}

public class ViewHub : Hub<IViewHub>
{
  private static int _viewCount;

  public async Task NotifyWatching()
  {
    _viewCount++;

    await Clients.All.ViewCountUpdate(_viewCount);
  }

  public async Task GetLastValue()
  {
    await Clients.All.LastValueUpdate(_viewCount);
  }

  public override async Task OnConnectedAsync()
  {
    _viewCount++;

    await Clients.All.ViewCountUpdate(_viewCount);

    await base.OnConnectedAsync();
  }

  public override async Task OnDisconnectedAsync(Exception? exception)
  {
    _viewCount--;

    await Clients.All.ViewCountUpdate(_viewCount);

    await base.OnDisconnectedAsync(exception);
  }
}