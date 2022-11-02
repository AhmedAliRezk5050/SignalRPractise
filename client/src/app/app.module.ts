import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { RealTimeCounterComponent } from './real-time-counter/real-time-counter.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { GroupsComponent } from './groups/groups.component';

@NgModule({
  declarations: [AppComponent, ChatComponent, RealTimeCounterComponent, UserInfoComponent, GroupsComponent],
  imports: [BrowserModule, NgbModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
