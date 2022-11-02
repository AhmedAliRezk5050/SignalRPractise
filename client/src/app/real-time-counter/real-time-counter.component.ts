import { CustomLogger } from './../logger/CustomLogger';
import { Component, OnInit } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Component({
  selector: 'app-real-time-counter',
  templateUrl: './real-time-counter.component.html',
  styleUrls: ['./real-time-counter.component.css'],
})
export class RealTimeCounterComponent implements OnInit {
  private _hubConnection!: signalR.HubConnection;
  count = 0;
  constructor() {}

  ngOnInit(): void {
    // create connection
    this._hubConnection = new signalR.HubConnectionBuilder()
      .configureLogging(new CustomLogger())
      .withUrl('http://localhost:5000/hubs/view', {
        transport: signalR.HttpTransportType.LongPolling,
      })
      .build();

    // start connection
    this._hubConnection
      .start()
      .then(() => {
        this.getLastCountValue();
        console.log('--- Connection Started ---');
      })
      .catch((err) => console.log(err));

    // listen to updates
    this._hubConnection.on('ViewCountUpdate', (count) => {
      this.count = count;
    });
    this._hubConnection.on('LastValueUpdate', (count) => {
      this.count = count;
    });
  }
  increaseCount = () => {
    this._hubConnection.send('NotifyWatching');
  };
  getLastCountValue = () => {
    this._hubConnection.send('GetLastValue');
  };
}
