import { Time } from "@angular/common";
import { Sprint } from "./sprint";

export class Meetings {
    Id:number;
    meetingDate:Date;
    meetingTime:Time;
    sprintId:number;
    meeting_platform_id:number;
    meetingType:string;
    meetingLink:string;
    meetingPassword:string;
    createdOn:Date;
    status:string;
    updatedOn:Date;
}
// private Integer Id;
//     private String meetingLink;
//     private LocalDateTime meetingDate;
//     private LocalDateTime meetingTime;
//     private Integer sprintId;
//     private Integer meeting_platform_id;
//     private String meetingType;
//     private String meetingPassword;
//     private LocalDateTime createdOn= LocalDateTime.now();
//     private String status;
//     private LocalDateTime updatedOn;