import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, isEmpty, map } from 'rxjs';
import { Sprint } from '../common/sprint';
import Swal from 'sweetalert2';
import { isDate } from 'moment';
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
    else if(sprint.projectCode==null){
      Swal.fire("Project Code is required!");
      return new Observable<Sprint>;
    }
    else if(sprint.startDate==null){
      Swal.fire("Start Date is required!");
      return new Observable<Sprint>;
    }
    else if(sprint.endDate==null || sprint.endDate==new Date()){
    Swal.fire("End Date is required");
    return new Observable<Sprint>;
    }
    else{
      Swal.fire("Sprint Created!");
      return this.httpClient.post(`${this.posturl}`,sprint);
    }
  }
}

