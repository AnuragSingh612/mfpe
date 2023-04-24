import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder ,Validators} from '@angular/forms';

import { RescheduleserviceService } from 'src/app/services/rescheduleservice.service';
import { Meetings } from 'src/app/common/meetings';
import { MeetingServiceService } from 'src/app/services/meeting-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-reschedule-meeting-component',
  templateUrl: './reschedule-meeting-component.component.html',
  styleUrls: ['./reschedule-meeting-component.component.css']
})
export class RescheduleMeetingComponentComponent {
  meetings:any;
  id:number;
  meetingForm:FormGroup;
  
  constructor(private http:HttpClient,private meetservice:RescheduleserviceService,private fb: FormBuilder,private meetingser:MeetingServiceService){
    this.meetingForm = fb.group({
      meetingLink: ['',Validators.required],
      meetingDate:[''],
      meetingTime:[''],
      meetingType:['']
    });  

  }

  ngOnInit(){
   
  }
  onSearchId(){
   // this.searchIdChanged.emit(this.id);
   
  }
  onPresss(){
    
    console.log("Function is called for id:"+this.id);
    let response= this.http.get('http://localhost:8080/api/meetings/'+this.id+"");
   response.subscribe((data)=>this.meetings=data); 
   console.log(this.meetings);
   this.meetingForm.patchValue(this.meetings); 
  }
  onSubmit(data:Meetings){
    
    console.log(data);
    return this.http.patch('http://localhost:8080/api/meetings/update/'+this.id+"",data).subscribe((dataq)=>{
      Swal.fire("Meeting got updated!");
     })
     
  }
}
