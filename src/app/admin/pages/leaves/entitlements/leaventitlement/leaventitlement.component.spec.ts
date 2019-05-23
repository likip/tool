import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaventitlementComponent } from './leaventitlement.component';

describe('LeaventitlementComponent', () => {
  let component: LeaventitlementComponent;
  let fixture: ComponentFixture<LeaventitlementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaventitlementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaventitlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
