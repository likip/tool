import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectreportComponent } from './projectreport.component';

describe('ProjectreportComponent', () => {
  let component: ProjectreportComponent;
  let fixture: ComponentFixture<ProjectreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
