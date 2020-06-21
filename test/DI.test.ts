import 'reflect-metadata';
import { Service, Container } from '../src/DI';

describe('DI', () => {
  it('rocks', () => {
    @Service
    class VueFactory {
      create(): string {
        return 'Vue';
      }
    }

    @Service
    class AngularFactory {
      create() {
        return 'Angular';
      }
    }

    @Service
    class ReactFactory {
      create() {
        return 'React';
      }
    }

    @Service
    class CoffeeMaker {
      constructor(
        private beanFactory: VueFactory,
        private sugarFactory: AngularFactory,
        private waterFactory: ReactFactory
      ) {}

      makeVue(): string {
        return this.beanFactory.create();
      }

      makeAngular(): string {
        return this.sugarFactory.create();
      }

      makeReact(): string {
        return this.waterFactory.create();
      }
    }

    const coffeeMaker = Container.get(CoffeeMaker);

    expect(coffeeMaker.makeVue()).toMatch(/vue/i);
    expect(coffeeMaker.makeAngular()).toMatch(/angular/i);
    expect(coffeeMaker.makeReact()).toMatch(/react/i);
  });
});
