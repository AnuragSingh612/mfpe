import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Sprint } from 'src/app/common/sprint';
import { SprintService } from 'src/app/services/sprint.service';

@Component({
  selector: 'app-add-sprint-component',
  templateUrl: './add-sprint-component.component.html',
  styleUrls: ['./add-sprint-component.component.css']
})
export class AddSprintComponentComponent implements OnInit {
  sprints:any;
  sprintdropdown:[];
  sprint:Sprint= new Sprint();
  error:any={isError:false,errorMessage:''};
  form: any;
  constructor(private http:HttpClient,private sprintservice:SprintService){}
  ngOnInit(){
    let response= this.http.get('http://localhost:8080/api/sprints');
    response.subscribe((data)=>this.sprints=data); 
   //response.subscribe((data)=>this.sprintdropdown=data);          
  }
  
  saveSprint(){
    this.sprintservice.createSprint(this.sprint).subscribe(data =>{
      console.log(data);
    })
  }
  onSubmit(){
    // console.log(this.sprint);
    this.saveSprint();
  }
  // onSelect(sprint){
  //     console.log();
  // }
  compareTwoDates(){
    if(new Date(this.form.controls['endDate'].value)<new Date(this.form.controls['startDate'].value)){
       this.error={isError:true,errorMessage:'End Date cannot be before start Date'};
    }
 }
}

