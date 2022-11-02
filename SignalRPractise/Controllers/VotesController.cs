using Microsoft.AspNetCore.Mvc;
using SignalRPractise.Services;

namespace SignalRPractise.Controllers;

[Route("api/[controller]")]
[ApiController]
public class VotesController : ControllerBase
{
  private readonly IVoteManager _voteManager;

  public VotesController(IVoteManager voteManager)
  {
    _voteManager = voteManager;
  }

  [HttpPost("pie")]
  public async Task<ActionResult> AddPieVote()
  {
    await _voteManager.MakeVote("pie");

    return Ok();
  }


  [HttpPost("bacon")]
  public async Task<ActionResult> AddBaconVote()
  {
    await _voteManager.MakeVote("bacon");

    return Ok();
  }
}