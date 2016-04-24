import AbstractDuckFactory from './AbstractDuckFactory';
import MallardDuck from './MallardDuck';
import RedheadDuck from './RedheadDuck';
import DuckCall from './DuckCall';
import RubberDuck from './RubberDuck';

class DuckFactory extends AbstractDuckFactory {
  createMallardDuck() {
    return new MallardDuck();
  }

  createRedheadDuck() {
    return new RedheadDuck();
  }

  createDuckCall() {
    return new DuckCall();
  }

  createRubberDuck() {
    return new RubberDuck();
  }
}

export default DuckFactory;
