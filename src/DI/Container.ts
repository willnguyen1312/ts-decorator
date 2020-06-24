import 'reflect-metadata';

export type ObjectType<T> = { new (...args: any[]): T };

export class Container {
  private static readonly services: any[] = [];
  public static set(service: any) {
    this.services.push(service);
  }

  private static readonly servicesValue = new Map();

  private static getServiceValue(service: any) {
    if (this.servicesValue.has(service)) {
      return this.servicesValue.get(service);
    }

    const serviceValue = new service();
    this.servicesValue.set(service, serviceValue);
    return serviceValue;
  }

  public static get<T>(service: ObjectType<T>): T {
    const servicesToInitialized = Reflect.getMetadata(
      'design:paramtypes',
      service
    );

    const initializedParams = servicesToInitialized.map((service: any) => {
      if (this.services.includes(service)) {
        return this.getServiceValue(service);
      }

      return service;
    });

    return new service(...initializedParams);
  }
}
