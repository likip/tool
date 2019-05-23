import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoiningformComponent } from './joiningform.component';

describe('JoiningformComponent', () => {
  let component: JoiningformComponent;
  let fixture: ComponentFixture<JoiningformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoiningformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoiningformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
