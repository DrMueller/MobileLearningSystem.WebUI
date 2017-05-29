import { IParameterlessConstructor } from '../types/interfaces';

export class JsObjFactory {
  public static create<T>(source: any, ctorFn: IParameterlessConstructor<T>): T {
    const result = new ctorFn();
    this.mapDefinedProperties(source, result);

    return result;
  }

  private static mapDefinedProperties<T>(source: Object, target: T): void {
    const properties = Object.getOwnPropertyNames(target);

    properties.forEach(propKey => {
      if (source.hasOwnProperty(propKey)) {
        target[propKey] = source[propKey];
      }
    });
  }
}
