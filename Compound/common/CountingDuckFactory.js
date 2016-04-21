import AbstractDuckFactory from './AbstractDuckFactory';
import QuackCounter from './QuackCounter';
import MallardDuck from './MallardDuck';
import RedheadDuck from './RedheadDuck';
import DuckCall from './DuckCall';
import RubberDuck from './RubberDuck';

class CountingDuckFactory extends AbstractDuckFactory {
  createMallardDuck() {
    return new QuackCounter(new MallardDuck());
  }

  createRedheadDuck() {
    return new QuackCounter(new RedheadDuck());
  }

  createDuckCall() {
    return new QuackCounter(new DuckCall());
  }

  createRubberDuck() {
    return new QuackCounter(new RubberDuck());
  }
}

export default CountingDuckFactory;
