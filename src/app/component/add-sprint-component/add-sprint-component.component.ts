import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Sprint } from 'src/app/common/sprint';
import { SprintService } from 'src/app/services/sprint.service';
import Swal from 'sweetalert2';

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
  constructor(private http:HttpClient,private sprintservice:SprintService){}
  ngOnInit(){
    let response= this.http.get('http://localhost:8080/api/sprints');
    response.subscribe((data)=>this.sprints=data);          
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

  
}

