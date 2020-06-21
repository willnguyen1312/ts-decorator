import { ClassDecorator } from '../src/classDecorator';

describe('method decorator', () => {
  it('works', () => {
    const classDecorator = new ClassDecorator('Nam', 'Nguyen');

    expect(classDecorator instanceof ClassDecorator).toBe(true);
  });
});
