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
  console.log("---->"+data.meeting_platform_id);
  if(data.meetingLink==='' ||
     data.meetingPassword==='' ||
      data.meetingDate===null ||
       data.meetingTime===null||
       data.meetingType=='' || 
       data.status==='' ||
        data.sprintID===null
       || data.meeting_platform_id===null)
       {
        Swal.fire("Required data is missing");
        return new Observable<Meetings>;
       }
       else
      return this.http.post(this.url,data);
}
}
