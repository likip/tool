import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveentitlementComponent } from './leaveentitlement.component';

describe('LeaveentitlementComponent', () => {
  let component: LeaveentitlementComponent;
  let fixture: ComponentFixture<LeaveentitlementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveentitlementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveentitlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
