import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyleaventitlementComponent } from './myleaventitlement.component';

describe('MyleaventitlementComponent', () => {
  let component: MyleaventitlementComponent;
  let fixture: ComponentFixture<MyleaventitlementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyleaventitlementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyleaventitlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
