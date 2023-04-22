import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSprintComponentComponent } from './component/add-sprint-component/add-sprint-component.component';
import { AddMeetingsComponentComponent } from './component/add-meetings-component/add-meetings-component.component';
import { RescheduleMeetingComponentComponent } from './component/reschedule-meeting-component/reschedule-meeting-component.component';

const routes: Routes = [{path:'add-sprint',component:AddSprintComponentComponent},
{path:'add-meetings', component:AddMeetingsComponentComponent},
{path:'reschedule-meeting',component:RescheduleMeetingComponentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
