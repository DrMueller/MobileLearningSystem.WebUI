import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import {
  FormValidationService,
  FormWithValidation,
  ValidationControlErrorsMap,
  ValidatedForm,
  ValidatedControl
} from '../../form-validation';

import { IRxFormBuilder, IFormControlBuilder, IFormWatchingBuilder } from '../interfaces';
import { FormControlBuilder, FormWatchingBuilder } from '.';

@Injectable()
export class RxFormBuilder implements IRxFormBuilder {
  private formGroup: FormGroup;
  private formValidationService: FormValidationService;
  private controlErrorsMaps: ValidationControlErrorsMap[];
  private validatedControls: ValidatedControl[];

  constructor(private formBuilder: FormBuilder) {
  }

  public startBuildingFormGroup(formValidationService: FormValidationService): IRxFormBuilder {
    this.formValidationService = formValidationService;
    this.controlErrorsMaps = [];
    this.validatedControls = [];
    this.formGroup = this.formBuilder.group({});

    return this;
  }

  public withControl(controlName: string): IFormControlBuilder {
    const formControlBuilder = new FormControlBuilder(controlName, this.controlErrorsMaps, this.formGroup, this.validatedControls, this);
    return formControlBuilder;
  }

  public buildForm(): FormWithValidation {
    const validatedForm = new ValidatedForm(this.validatedControls);
    this.formValidationService.initialize(this.formGroup, this.controlErrorsMaps, validatedForm);
    const result = new FormWithValidation(this.formGroup, validatedForm);
    return result;
  }

  public withFormValidationWatcher(): IFormWatchingBuilder {
    const formWatchingBuilder = new FormWatchingBuilder(this.formGroup, this.formValidationService, this);
    return formWatchingBuilder;
  }
}
