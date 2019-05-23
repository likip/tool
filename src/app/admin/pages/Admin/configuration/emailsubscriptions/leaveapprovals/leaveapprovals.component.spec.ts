import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveapprovalsComponent } from './leaveapprovals.component';

describe('LeaveapprovalsComponent', () => {
  let component: LeaveapprovalsComponent;
  let fixture: ComponentFixture<LeaveapprovalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveapprovalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveapprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
