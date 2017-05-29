import { ValidatorFn } from '@angular/forms';

import { IValidationKeyErrorMapBuilder, IFormControlBuilder } from '../interfaces';
import { ValidationError, ValidationKeyErrorMap, } from '../../form-validation';
import { IValidator } from '../../validators';

export class ValidationKeyErrorMapBuilder implements IValidationKeyErrorMapBuilder {
  private _customErrorMessage: string | null = null;

  constructor(
    private keyErrorMaps: ValidationKeyErrorMap[],
    private validator: IValidator,
    private formControlBuilder: IFormControlBuilder) {
  }

  public withCustomErrorMessage(errorMessage: string): IValidationKeyErrorMapBuilder {
    this._customErrorMessage = errorMessage;
    return this;
  }

  public buildValidationKeyErrorMap(): IFormControlBuilder {
    const errorMessage = this.getErrorMessage();
    const keyErrorMap = new ValidationKeyErrorMap(this.validator.key, new ValidationError(errorMessage));

    this.keyErrorMaps.push(keyErrorMap);
    return this.formControlBuilder;
  }

  private getErrorMessage(): string {
    let result: string;

    if (this._customErrorMessage !== null) {
      result = this._customErrorMessage;
    } else {
      result = this.validator.defaultErrorMessage;
    }

    return result;
  }
}
