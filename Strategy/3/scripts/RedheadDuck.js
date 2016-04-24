import Duck from './Duck';
import Quackable from './Quackable';
import Flyable from './Flyable';

class RedheadDuck extends Duck(Quackable(Flyable(null))) {
  display() {
    console.log('RedheadDuck show');
  }
}

export default RedheadDuck;
