import Flyable from './Flyable';
import Quackable from './Quackable';

class Duck extends Quackable(Flyable(null)) {
  swim() {
    console.log('Chop!');
  }
}

export default Duck;
