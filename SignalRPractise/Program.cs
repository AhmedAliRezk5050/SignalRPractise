using SignalRPractise.Hubs;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddSignalR();
builder.Services.AddCors(options =>
{
  options.AddPolicy("CORSPolicy",
      builder => builder
      .AllowAnyMethod()
      .AllowAnyHeader()
      .AllowCredentials()
      .SetIsOriginAllowed((hosts) => true));
});
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseCors("CORSPolicy");

app.UseAuthorization();

app.MapHub<MessageHub>("/offers");
app.MapHub<ChatHub>("/chatHub");

app.MapControllers();

app.Run();
