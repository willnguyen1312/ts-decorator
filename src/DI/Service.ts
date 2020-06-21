import { Container } from './Container';

export function Service(target: Function) {
  Container.set(target);
}
