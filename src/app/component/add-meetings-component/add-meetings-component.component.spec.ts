import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMeetingsComponentComponent } from './add-meetings-component.component';

describe('AddMeetingsComponentComponent', () => {
  let component: AddMeetingsComponentComponent;
  let fixture: ComponentFixture<AddMeetingsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMeetingsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMeetingsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
