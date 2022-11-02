using Microsoft.AspNetCore.SignalR;
using SignalRPractise.Services;

namespace SignalRPractise.Hubs;
public class VotesHub : Hub
{
  private readonly IVoteManager _voteManager;

  public VotesHub(IVoteManager voteManager)
  {
    _voteManager = voteManager;
  }

  public Dictionary<string, int> GetCurrentVotes()
  {
    return _voteManager.GetCurrentVotes();
  }

}