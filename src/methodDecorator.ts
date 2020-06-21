function log(_: any, key: string, value: any) {
  return {
    value: function(...args: any[]) {
      const a = args.map(a => JSON.stringify(a)).join();
      const result = value.value.apply(this, args);
      const r = JSON.stringify(result);
      console.log(`Call: ${key}(${a}) => ${r}`);
      return result;
    },
  };
}

export class MethodDecorator {
  @log
  double(n: number) {
    return n * 2;
  }
}
