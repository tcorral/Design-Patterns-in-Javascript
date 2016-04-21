import AbstractDuckFactory from '../../common/AbstractDuckFactory';
import MallardDuck from '../../common/MallardDuck';
import RedheadDuck from '../../common/RedheadDuck';
import DuckCall from '../../common/DuckCall';
import RubberDuck from '../../common/RubberDuck';

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
