import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescheduleMeetingComponentComponent } from './reschedule-meeting-component.component';

describe('RescheduleMeetingComponentComponent', () => {
  let component: RescheduleMeetingComponentComponent;
  let fixture: ComponentFixture<RescheduleMeetingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RescheduleMeetingComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RescheduleMeetingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
