import { TestBed } from '@angular/core/testing';

import { MeetingPlatformService } from './meeting-platform.service';

describe('MeetingPlatformService', () => {
  let service: MeetingPlatformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeetingPlatformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
