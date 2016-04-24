import Duck from './Duck';
import Quackable from './Quackable';

class MallardDuck extends Duck(Quackable(null)) {
  display() {
    console.log('MallardDuck show');
  }
}

export default MallardDuck;
