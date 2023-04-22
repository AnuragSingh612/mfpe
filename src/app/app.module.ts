import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddSprintComponentComponent } from './component/add-sprint-component/add-sprint-component.component';
import { AddMeetingsComponentComponent } from './component/add-meetings-component/add-meetings-component.component';
import { RescheduleMeetingComponentComponent } from './component/reschedule-meeting-component/reschedule-meeting-component.component';
import {HttpClientModule} from '@angular/common/http'
import { SprintService } from './services/sprint.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    AddSprintComponentComponent,
    AddMeetingsComponentComponent,
    RescheduleMeetingComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule ,
    MomentDateModule,
    MatInputModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
