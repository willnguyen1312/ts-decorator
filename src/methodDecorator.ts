function log(_: any, key: string, propertyDescriptor: any) {
  const originalMethod = propertyDescriptor.value;
  return {
    value: function(...args: any[]) {
      const a = args.map(a => JSON.stringify(a)).join();
      const result = originalMethod.apply(this, args);
      console.log(`Call: ${key}(${a}) => ${JSON.stringify(result)}`);
      return result;
    },
  };
}

export class MethodDecorator {
  @log
  double(input: number) {
    return input * 2;
  }
}
