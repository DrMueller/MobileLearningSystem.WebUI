import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidationErrorDisplayComponent } from './form-validation-error-display.component';

describe('FormValidationErrorDisplayComponent', () => {
  let component: FormValidationErrorDisplayComponent;
  let fixture: ComponentFixture<FormValidationErrorDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidationErrorDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidationErrorDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
