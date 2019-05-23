import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaygradesComponent } from './paygrades.component';

describe('PaygradesComponent', () => {
  let component: PaygradesComponent;
  let fixture: ComponentFixture<PaygradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaygradesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaygradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
