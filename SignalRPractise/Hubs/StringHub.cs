using Microsoft.AspNetCore.SignalR;

namespace SignalRPractise.Hubs;

public class StringHub : Hub
{
  public string GetString(string fName, string lName)
  {
    return $"{fName} -- {lName}";
  }
}
