import { MethodDecorator } from '../src/methodDecorator';

describe('blah', () => {
  it('works', () => {
    const methodDecorator = new MethodDecorator();

    expect(methodDecorator.double(123)).toBe(246);
  });
});
