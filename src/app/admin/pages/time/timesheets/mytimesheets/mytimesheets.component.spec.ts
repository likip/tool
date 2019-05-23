import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytimesheetsComponent } from './mytimesheets.component';

describe('MytimesheetsComponent', () => {
  let component: MytimesheetsComponent;
  let fixture: ComponentFixture<MytimesheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytimesheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytimesheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
