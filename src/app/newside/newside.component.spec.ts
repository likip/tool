import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsideComponent } from './newside.component';

describe('NewsideComponent', () => {
  let component: NewsideComponent;
  let fixture: ComponentFixture<NewsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
