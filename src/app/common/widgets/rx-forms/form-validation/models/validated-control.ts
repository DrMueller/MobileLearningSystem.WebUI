import { ValidationError, ControlValidationErrorContainer } from '.';

export class ValidatedControl {
  private _errorContainer = ControlValidationErrorContainer.nullObject;

  public get errorContainer(): ControlValidationErrorContainer {
    return this._errorContainer;
  }

  public static create(controlName: string) {
    return new ValidatedControl(controlName);
  }

  constructor(public controlName: string) {
  }

  public get hasErrors(): boolean {
    return this.errorContainer.validationErrors.length > 0;
  }

  public setValidationErrors(validationErrors: ValidationError[]) {
    this._errorContainer.setValidationErrors(validationErrors);
  }
}
