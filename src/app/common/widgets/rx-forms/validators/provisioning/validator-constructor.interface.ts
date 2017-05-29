import { IValidator } from '../services';

export interface IValidatorConstructor {
  new (): IValidator;
}
