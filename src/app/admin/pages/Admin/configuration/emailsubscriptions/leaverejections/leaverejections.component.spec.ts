import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaverejectionsComponent } from './leaverejections.component';

describe('LeaverejectionsComponent', () => {
  let component: LeaverejectionsComponent;
  let fixture: ComponentFixture<LeaverejectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaverejectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaverejectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
