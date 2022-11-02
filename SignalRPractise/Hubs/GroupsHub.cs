using Microsoft.AspNetCore.SignalR;

namespace SignalRPractise.Hubs;

public class GroupsHub : Hub
{
  public async Task AddToGroup(string groupName)
  {
    await Groups.AddToGroupAsync(Context.ConnectionId, groupName);
  }

  public async Task TriggerGroup(string groupName)
  {
    await Clients.Groups(groupName).SendAsync("GroupTriggered", groupName);
  }
}