import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder ,Validators} from '@angular/forms';

import { RescheduleserviceService } from 'src/app/services/rescheduleservice.service';
import { Meetings } from 'src/app/common/meetings';
import { MeetingServiceService } from 'src/app/services/meeting-service.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
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
      meetingDate:['',Validators.required],
      meetingTime:['',Validators.required],
      meetingType:['',Validators.required]
    });  

  }
  get registerFormControl() {
    return this.meetingForm.controls;
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
  //  if(this.meetings==undefined)
  //  Swal.fire("Meeting does not exist for current Id");
   this.meetingForm.patchValue(this.meetings); 
  }
  onSubmit(data:Meetings){
    
    console.log("------->"+data.meetingTime);
 
    if(data.meetingLink==''|| data.meetingType==''|| data.meetingDate==null || data.meetingTime==null)
    {
      Swal.fire("Missing data is required!");
      return new Meetings;
    }
    else{
      return this.http.patch('http://localhost:8080/api/meetings/update/'+this.id+"",data).subscribe((dataq)=>{
        Swal.fire("Meeting got updated!");
        console.log(dataq);
       })
    }
    
     
  }
}
