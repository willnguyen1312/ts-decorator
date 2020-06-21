function logProperty(target: any, key: string) {
  // property value
  // @ts-ignore
  var _val = target[key];

  // property getter
  var getter = function() {
    console.log(`Get: ${key} => ${_val}`);
    return _val;
  };

  // property setter
  // @ts-ignore
  var setter = function(newVal) {
    console.log(`Set: ${key} => ${newVal}`);
    _val = newVal;
  };

  // Delete property.
  // @ts-ignore
  if (delete target[key]) {
    // Create new property with getter and setter
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  }
}

export class PropertyDecorator {
  @logProperty
  public name: string;
  @logProperty
  public surname: string;

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }
}
