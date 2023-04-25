import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { timestamp } from 'rxjs';
import { Meetings } from 'src/app/common/meetings';
import { Platforms } from 'src/app/common/platforms';
import { MeetingPlatformService } from 'src/app/services/meeting-platform.service';
import { MeetingServiceService } from 'src/app/services/meeting-service.service';
import { SprintService } from 'src/app/services/sprint.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-meetings-component',
  templateUrl: './add-meetings-component.component.html',
  styleUrls: ['./add-meetings-component.component.css']
})
export class AddMeetingsComponentComponent implements OnInit{
  sprints:any;
  platforms:any;
  defaultPlatform:number;
  defaultSprint:number;
  meeting:Meetings= new Meetings();
  val:number;
  meetingtype:FormGroup;
  constructor(private http:HttpClient,
    private sprintservice:SprintService,
    private platformsSer:MeetingPlatformService,
    private meetingser:MeetingServiceService,
    ){}
  ngOnInit(): void {
    this.defaultPlatform=2;
    this.defaultSprint=1;
    this.sprintservice.getAllUsers().subscribe((data)=>this.sprints=data);
    let response2=this.http.get('http://localhost:8080/api/meetings/platform');
    response2.subscribe((data)=>this.platforms=data);
  }
  getType(){
    return this.meetingtype.get("type");
  }
  onSelected(val1:any){
    this.val=val1;

    console.log(val1);
  }
  onSelectedsprint(sprint11:any){
    // this.val=val1;

    console.log("--->"+sprint11);
  }

  onSubmit(data:Meetings){
    
    console.log(data);
    this.meetingser.saveMeeting(data).subscribe((data)=>{
     console.log("---->>>>"+data);
     Swal.fire("Meeting Created!");
    })
   

  }
}
