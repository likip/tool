import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytrackerComponent } from './mytracker.component';

describe('MytrackerComponent', () => {
  let component: MytrackerComponent;
  let fixture: ComponentFixture<MytrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
