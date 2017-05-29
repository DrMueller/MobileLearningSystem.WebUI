import { ValidatedControl, ValidationError } from '.';

export class ValidatedForm {
  public constructor(private validatedControls: ValidatedControl[]) {
  }

  public find(controlName: string): ValidatedControl {
    const controlValidation = this.validatedControls.find(f => f.controlName === controlName);
    if (controlValidation) {
      return controlValidation;
    }

    throw new Error(`Control ${controlName}' not found.`);
  }

  public setControlValidationErrors(controlName: string, validationErrors: ValidationError[]) {
    const control = this.find(controlName);
    control.setValidationErrors(validationErrors);
  }

  public static get nullObject(): ValidatedForm {
    return new ValidatedForm([]);
  }
}
