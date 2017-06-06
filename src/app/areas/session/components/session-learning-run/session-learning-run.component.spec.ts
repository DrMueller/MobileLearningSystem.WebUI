import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionLearningRunComponent } from './session-learning-run.component';

describe('SessionLearningRunComponent', () => {
  let component: SessionLearningRunComponent;
  let fixture: ComponentFixture<SessionLearningRunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionLearningRunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionLearningRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
