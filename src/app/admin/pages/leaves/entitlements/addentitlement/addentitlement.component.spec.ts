import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddentitlementComponent } from './addentitlement.component';

describe('AddentitlementComponent', () => {
  let component: AddentitlementComponent;
  let fixture: ComponentFixture<AddentitlementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddentitlementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddentitlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
