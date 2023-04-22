import { Platform } from '@angular/cdk/platform';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeetingPlatformService {
  private url='http://localhost:8080//api/meetings/platform';
  constructor(private httpClient:HttpClient) { }
  public getAllPlatforms(){
    return this.httpClient.get<Platform[]>(this.url);
  }
}
