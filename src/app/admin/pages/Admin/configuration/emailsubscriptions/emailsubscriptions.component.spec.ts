import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsubscriptionsComponent } from './emailsubscriptions.component';

describe('EmailsubscriptionsComponent', () => {
  let component: EmailsubscriptionsComponent;
  let fixture: ComponentFixture<EmailsubscriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailsubscriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailsubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
