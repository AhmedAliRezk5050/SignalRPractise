using Microsoft.AspNetCore.SignalR;
using SignalRPractise.Hubs;

namespace SignalRPractise.Services;
public class VoteManager : IVoteManager
{
  private static Dictionary<string, int> votes = new() {
    {"pie", 0},
    {"bacon", 0},
   };
  private readonly IHubContext<VotesHub> _hubContext;

  public VoteManager(IHubContext<VotesHub> hubContext)
  {
    _hubContext = hubContext;
  }

  public Dictionary<string, int> GetCurrentVotes()
  {
    return votes;
  }

  public async Task MakeVote(string voteFor)
  {
    votes[voteFor]++;

    // notify users
    await _hubContext.Clients.All.SendAsync("VotesUpdated", votes);
  }
}