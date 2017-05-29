import { FormGroup } from '@angular/forms';

import { ValidatedControl, ValidationError, ValidatedForm } from '../..';

// Asset from the form-building workflow, handles the incoming errors and passes it to the component
// Also holds the formGroup in order to only have to manage one object per component for validation and form-handling
export class FormWithValidation {
  constructor(private _formGroup: FormGroup, private validatedForm: ValidatedForm) {
  }

  public get formGroup(): FormGroup {
    return this._formGroup;
  }

  public getValidatedControl(controlName: string): ValidatedControl {
    return this.validatedForm.find(controlName);
  }
}
