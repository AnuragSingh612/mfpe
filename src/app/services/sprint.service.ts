import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Sprint } from '../common/sprint';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class SprintService {
  private url='http://localhost:8080/api/sprints';
  private posturl='http://localhost:8080/api/sprints/new';
  constructor(private httpClient:HttpClient) { }
  public getAllUsers(){
    return this.httpClient.get<Sprint[]>(this.url);
  }
  createSprint(sprint:Sprint):Observable<Object>{
    if(sprint.startDate>sprint.endDate)
    {
      Swal.fire("End date should be greater than Start Date");
      return new Observable<Sprint>;
    }
    else{
    return this.httpClient.post(`${this.posturl}`,sprint);
    }
  }
  // createMeeting(meeting:Meetings):Observable<Object>{
  //   return this.httpClient.post(`${this.posturl}`,sprint);
  // }
}

