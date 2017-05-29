import { ValueProvider, ClassProvider } from '@angular/core';

export class NgProvideUtilities {
  // ExistingProvider doesn't seem to work, since it has to be useValue, not useExisting
  public static provideValue(provide: any, useValue: any, multi?: boolean): ValueProvider {
    return {
      multi: multi,
      provide: provide,
      useValue: useValue
    };
  }
  public static provideClass(provide: any, useClass: any, multi?: boolean): ClassProvider {
    return {
      multi: multi,
      provide: provide,
      useClass: useClass
    };
  }
}
