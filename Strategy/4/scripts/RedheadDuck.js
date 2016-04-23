import Duck from './Duck';
import FlyWithWings from './FlyWithWings';
import Quack from './Quack';

class RedheadDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quack();
  }

  display() {
    console.log("RedheadDuck show");
  }
}

export default RedheadDuck;
