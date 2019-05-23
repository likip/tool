import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshiftComponent } from './workshift.component';

describe('WorkshiftComponent', () => {
  let component: WorkshiftComponent;
  let fixture: ComponentFixture<WorkshiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
