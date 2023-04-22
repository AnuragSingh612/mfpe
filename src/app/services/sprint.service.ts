import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Sprint } from '../common/sprint';
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
    return this.httpClient.post(`${this.posturl}`,sprint);
  }
  // createMeeting(meeting:Meetings):Observable<Object>{
  //   return this.httpClient.post(`${this.posturl}`,sprint);
  // }
}

