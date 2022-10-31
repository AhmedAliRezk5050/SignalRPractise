import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as signalR from '@microsoft/signalr';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  chatForm!: FormGroup;
  private _hubConnection!: signalR.HubConnection;

  messages: string[] = [];
  constructor() {}

  ngOnInit(): void {
    this.chatForm = new FormGroup({
      user: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required),
    });

    this._hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5000/chatHub')
      .build();

    this._hubConnection.on('ReceiveMessage', (user, message) => {
      this.messages.push(`${user} says ${message}`);
    });

    this._hubConnection
      .start()
      .then(function () {
        console.log('Connection Started');
      })
      .catch(function (err) {
        return console.error(err.toString());
      });
  }

  onSubmit() {
    const { user, message } = this.chatForm.value;
    this._hubConnection
      .invoke('SendMessage', user, message)
      .catch(function (err) {
        return console.error(err.toString());
      });
  }
}
