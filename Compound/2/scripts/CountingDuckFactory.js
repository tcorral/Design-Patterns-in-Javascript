import AbstractDuckFactory from '../../common/AbstractDuckFactory';
import MallardDuck from '../../common/MallardDuck';
import RedheadDuck from '../../common/RedheadDuck';
import DuckCall from '../../common/DuckCall';
import RubberDuck from '../../common/RubberDuck';
import QuackCounter from '../../common/QuackCounter';

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
