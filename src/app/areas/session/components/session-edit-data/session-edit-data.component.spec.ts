import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionEditDataComponent } from './session-edit-data.component';

describe('SessionEditDataComponent', () => {
  let component: SessionEditDataComponent;
  let fixture: ComponentFixture<SessionEditDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionEditDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionEditDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
