import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveapplicantsComponent } from './leaveapplicants.component';

describe('LeaveapplicantsComponent', () => {
  let component: LeaveapplicantsComponent;
  let fixture: ComponentFixture<LeaveapplicantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveapplicantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveapplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
