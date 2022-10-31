import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { RealTimeCounterComponent } from './real-time-counter/real-time-counter.component';

@NgModule({
  declarations: [AppComponent, ChatComponent, RealTimeCounterComponent],
  imports: [BrowserModule, NgbModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
