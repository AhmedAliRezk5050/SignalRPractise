import { Component, OnInit } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
})
export class GroupsComponent implements OnInit {
  private _hubConnection!: signalR.HubConnection;
  constructor() {}

  ngOnInit(): void {
    this._hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5000/hubs/groups')
      .build();

    this._hubConnection
      .start()
      .then(function () {
        console.log('Connection Started');
      })
      .catch(function (err) {
        return console.error(err.toString());
      });

    this._hubConnection.on('GroupTriggered', (groupname) => {
      console.log(groupname);
    });
  }

  triggerGroup = (groupName: string) => {
    this._hubConnection.send('TriggerGroup', groupName);
  };

  join = (groupName: string) => {
    this._hubConnection.send('AddToGroup', groupName);
  };
}
