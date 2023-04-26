import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meetings } from '../common/meetings';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MeetingServiceService {

  private url='http://localhost:8080/api/meetings/new';
constructor(private http:HttpClient) { }
// createMeeting(meeting:Meetings):Observable<Object>{
//   console.log("--> ",meeting);
//   return this.httpClient.post(`${this.url}`,meeting);
// }
saveMeeting(data:Meetings):Observable<Object>{
  console.log("---->"+data.sprintId);
  if(data.meetingLink==''){
    Swal.fire("Meeting link is missing");
    return new Observable<Meetings>;
  }
  else if(data.meetingPassword==''){
    Swal.fire("Password is missing");
    return new Observable<Meetings>;
  }
  else if(data.meetingDate==null){
    Swal.fire("Meeting Date is missing");
    return new Observable<Meetings>;
  }    
  else if(data.meetingTime==null){
    Swal.fire("Meeting Type is missing");
    return new Observable<Meetings>;
  }
  else if(data.meetingType=='')
  {
    Swal.fire("Meeting Type is missing");
    return new Observable<Meetings>;
  }
  else if(data.status==''){
    Swal.fire("Meeting Status is missing");
    return new Observable<Meetings>;
  }
  else if(data.sprintId==null){
    Swal.fire("Sprint is missing");
    return new Observable<Meetings>;
  }
  else if( data.meeting_platform_id==null){
    Swal.fire("Meeting platform is missing");
    return new Observable<Meetings>;
  }      
  else{
    return this.http.post(this.url,data);
  }
    
}
}
