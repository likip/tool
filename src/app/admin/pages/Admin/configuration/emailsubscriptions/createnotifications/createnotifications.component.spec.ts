import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenotificationsComponent } from './createnotifications.component';

describe('CreatenotificationsComponent', () => {
  let component: CreatenotificationsComponent;
  let fixture: ComponentFixture<CreatenotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatenotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatenotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
