import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptrackerComponent } from './emptracker.component';

describe('EmptrackerComponent', () => {
  let component: EmptrackerComponent;
  let fixture: ComponentFixture<EmptrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
