import { TestBed } from '@angular/core/testing';

import { RescheduleserviceService } from './rescheduleservice.service';

describe('RescheduleserviceService', () => {
  let service: RescheduleserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RescheduleserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
