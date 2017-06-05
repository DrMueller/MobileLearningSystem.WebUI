import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionEditFactsComponent } from './session-edit-facts.component';

describe('SessionEditFactsComponent', () => {
  let component: SessionEditFactsComponent;
  let fixture: ComponentFixture<SessionEditFactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionEditFactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionEditFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
