import { MethodDecorator } from '../src/methodDecorator';

describe('method decorator', () => {
  it('works', () => {
    const methodDecorator = new MethodDecorator();

    expect(methodDecorator.double(123)).toBe(246);
  });
});
