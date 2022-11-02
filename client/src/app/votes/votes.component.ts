import { Component, OnInit } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css'],
})
export class VotesComponent implements OnInit {
  private _hubConnection!: signalR.HubConnection;
  constructor() {}

  ngOnInit(): void {
    this._hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5000/hubs/votes')
      .withAutomaticReconnect()
      .build();

    this._hubConnection
      .start()
      .then(() => {
        console.log('---Connection Started---');
        this._hubConnection.invoke('GetCurrentVotes').then((votes) => {
          console.log(votes);
        });
      })
      .catch((err) => console.log(err));

    this._hubConnection.on('VotesUpdated', (votes) => {
      console.log(votes);
    });
  }
}
