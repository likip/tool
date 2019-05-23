import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptimesheetsComponent } from './emptimesheets.component';

describe('EmptimesheetsComponent', () => {
  let component: EmptimesheetsComponent;
  let fixture: ComponentFixture<EmptimesheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptimesheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptimesheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
