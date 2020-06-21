import 'reflect-metadata';

function logType(target: any, key: string) {
  const t = Reflect.getMetadata('design:type', target, key);
  console.log(`${key} type: ${t.name}`);
}

export class ReflectDemo {
  @logType
  public attr1: string = 'tada';
}

function logParamTypes(target: any, key: string) {
  const types = Reflect.getMetadata('design:paramtypes', target, key);

  const s = types.map((a: Function) => a.name).join();
  console.log(`${key} param types: ${s}`);

  const returnType = Reflect.getMetadata('design:returntype', target, key);
  console.log(`${key} return types: ${returnType.name}`);
}

class Foo {}
interface IFoo {}

export class ReflectAnotherDemo {
  @logParamTypes // apply parameter decorator
  doSomething(
    param1: string,
    param2: number,
    param3: Foo,
    param4: { test: string },
    param5: IFoo,
    param6: Function,
    param7: (a: number) => void
  ): number {
    return 1;
  }
}
