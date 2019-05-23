import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtrackerComponent } from './addtracker.component';

describe('AddtrackerComponent', () => {
  let component: AddtrackerComponent;
  let fixture: ComponentFixture<AddtrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
