import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunchinoutComponent } from './punchinout.component';

describe('PunchinoutComponent', () => {
  let component: PunchinoutComponent;
  let fixture: ComponentFixture<PunchinoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunchinoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunchinoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
