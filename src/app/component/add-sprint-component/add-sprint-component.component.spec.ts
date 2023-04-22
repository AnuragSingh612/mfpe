import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSprintComponentComponent } from './add-sprint-component.component';

describe('AddSprintComponentComponent', () => {
  let component: AddSprintComponentComponent;
  let fixture: ComponentFixture<AddSprintComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSprintComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSprintComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
