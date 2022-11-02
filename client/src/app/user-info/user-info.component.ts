import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  private _connection!: signalR.HubConnection;
  userForm!: FormGroup;
  userInfo?: string;
  constructor() {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      fName: new FormControl(null, Validators.required),
      lName: new FormControl(null, Validators.required),
    });
    this._connection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5000/hubs/strings')
      .build();

    this._connection
      .start()
      .then(() => console.log('--Connection Started--'))
      .catch((err) => console.log(err));
  }

  onSubmit = () => {
    const { fName, lName } = this.userForm.value;
    this._connection.invoke('GetString', fName, lName).then((info) => {
      this.userInfo = info;
    });
    // this._connection.send('GetString', fName, lName).then((info) => {
    // error => no value returned because send does not wait for server response
    //   this.userInfo = info;
    // });
  };
}
