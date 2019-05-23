import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentstatusComponent } from './employmentstatus.component';

describe('EmploymentstatusComponent', () => {
  let component: EmploymentstatusComponent;
  let fixture: ComponentFixture<EmploymentstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploymentstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
