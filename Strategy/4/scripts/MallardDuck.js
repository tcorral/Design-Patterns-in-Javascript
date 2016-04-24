import Duck from './Duck';
import FlyWithWings from './FlyWithWings';
import QuackBehavior from './QuackBehavior';

class MallardDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new QuackBehavior();
  }

  display() {
    console.log('MallardDuck show');
  }
}

export default MallardDuck;
