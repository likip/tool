import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerinfoComponent } from './trackerinfo.component';

describe('TrackerinfoComponent', () => {
  let component: TrackerinfoComponent;
  let fixture: ComponentFixture<TrackerinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackerinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
