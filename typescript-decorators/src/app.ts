/* eslint-disable @typescript-eslint/ban-types */
function logClass(message: string): ClassDecorator {
  console.log(`${message} evaluated`);

  return function (constructor): void {
    console.log(`${message} called`, constructor);
  };
}

function logProperty(message: string): PropertyDecorator {
  console.log(`${message} evaluated`);

  return function (target: Object, propertyKey: string) {
    console.log(`${message} called`);
  };
}

function logMethod(message: string): MethodDecorator {
  console.log(`${message} evaluated`);

  return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(`${message} called`);
  };
}

function logParameter(message: string): ParameterDecorator {
  console.log(`${message} evaluated`);

  return function (target: Object, propertyKey: string, parameterIndex: number) {
    console.log(`${message} called`);
  };
}
@logClass('Class decorator')
class Person {
  private _directReports: Person[];

  @logProperty('Property Decorator')
  public emailAddress: string;

  constructor(public firstName: string, public lastName: string) {
    this._directReports = [];
  }

  @logMethod('Method decorator')
  @logMethod('Method decorator 2')
  public addDirectReport(@logParameter('Parameter Decorator') person: Person) {
    this._directReports.push(person);
  }
}

const person = new Person('Nick', 'Vanden Eynde');
