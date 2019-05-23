import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyentitlementComponent } from './myentitlement.component';

describe('MyentitlementComponent', () => {
  let component: MyentitlementComponent;
  let fixture: ComponentFixture<MyentitlementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyentitlementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyentitlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
