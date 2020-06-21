import { ParamDecorator } from '../src/paramDecorator';

describe('method decorator', () => {
  it('works', () => {
    const methodDecorator = new ParamDecorator('Nam', 'Nguyen');

    console.log(methodDecorator.saySomething('Awesome'));
  });
});
