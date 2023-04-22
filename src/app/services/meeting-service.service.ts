import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meetings } from '../common/meetings';
import { Observable } from 'rxjs';

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
saveMeeting(data:Meetings){
  console.log("---->"+data.meeting_platform_id);
  return this.http.post(this.url,data);
}
}
