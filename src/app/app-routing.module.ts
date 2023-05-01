import { Component, Injector, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AddSprintComponentComponent } from './component/add-sprint-component/add-sprint-component.component';
import { AddMeetingsComponentComponent } from './component/add-meetings-component/add-meetings-component.component';
import { RescheduleMeetingComponentComponent } from './component/reschedule-meeting-component/reschedule-meeting-component.component';
import{
  OktaAuthModule,
  OktaCallbackComponent,
  OKTA_CONFIG,
  OktaAuthGuard
} from '@okta/okta-angular';
import {OktaAuth} from '@okta/okta-auth-js';
import myAppConfig from './config/my-app-config';
import { LoginComponent } from './component/login/login.component';
const oktaConfig = myAppConfig.oidc;
const oktaAuth = new OktaAuth(oktaConfig);
function sendToLoginPage(oktaAuth: OktaAuth,injector:Injector){
   //Use injector to access any service available within your application 
   const router= injector.get(Router);
   //Redirect the user to your custom login page
   router.navigate(['/login']);
}
const routes: Routes = [
{path:'login/callback',component:OktaCallbackComponent},
{path:'login',component:LoginComponent},
{path:'add-sprint',component:AddSprintComponentComponent,canActivate:[OktaAuthGuard],data:{onAuthRequired: sendToLoginPage}},
// {path:'add-sprint',component:AddSprintComponentComponent},
{path:'add-meetings', component:AddMeetingsComponentComponent,canActivate:[OktaAuthGuard],data:{onAuthRequired: sendToLoginPage}},
{path:'reschedule-meeting',component:RescheduleMeetingComponentComponent,canActivate:[OktaAuthGuard],data:{onAuthRequired: sendToLoginPage}}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
