namespace SignalRPractise.Services;
public interface IVoteManager
{
  Dictionary<string, int> GetCurrentVotes();
  public Task MakeVote(string voteFor);
}
