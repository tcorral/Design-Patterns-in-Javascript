import Duck from './Duck';
import Quackable from './Quackable';

class RubberDuck extends Duck(Quackable(null)) {
  display() {
    console.log('RubberDuck show')
  }
}

export default RubberDuck;
