import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  chatForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.chatForm = new FormGroup({
      user: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.chatForm.value);
  }
}
