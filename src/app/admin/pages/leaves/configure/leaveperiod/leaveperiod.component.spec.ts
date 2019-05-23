import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveperiodComponent } from './leaveperiod.component';

describe('LeaveperiodComponent', () => {
  let component: LeaveperiodComponent;
  let fixture: ComponentFixture<LeaveperiodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveperiodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveperiodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
