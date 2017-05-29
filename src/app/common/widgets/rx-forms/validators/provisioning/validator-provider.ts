import { ValidatorProviderFactory } from '../provisioning/valdidator-provider-factory';
import { MinLengthValidator } from '../services/validator-implementations';
import { IValidatorConstructor } from '.';

export class ValidatorProvider {
  public provide = ValidatorProviderFactory.APP_VALIDATOR_TOKEN;
  public multi = true;

  public static create(useClass: IValidatorConstructor): ValidatorProvider {
    return new ValidatorProvider(useClass);
  }

  constructor(public useClass: IValidatorConstructor) {
  }
}
