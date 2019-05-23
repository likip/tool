import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkweekComponent } from './workweek.component';

describe('WorkweekComponent', () => {
  let component: WorkweekComponent;
  let fixture: ComponentFixture<WorkweekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkweekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkweekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
