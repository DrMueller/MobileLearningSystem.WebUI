import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionTestRunComponent } from './session-test-run.component';

describe('SessionTestRunComponent', () => {
  let component: SessionTestRunComponent;
  let fixture: ComponentFixture<SessionTestRunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionTestRunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionTestRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
