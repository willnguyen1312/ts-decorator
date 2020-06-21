import { PropertyDecorator } from '../src/propertyDecorator';

describe('propety decorator', () => {
  it('works', () => {
    const methodDecorator = new PropertyDecorator('Nam', 'Nguyen');

    expect(methodDecorator.name).toBe('Nam');
    expect(methodDecorator.surname).toBe('Nguyen');
  });
});
