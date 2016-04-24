import Duck from './Duck';
import FlyNoWay from './FlyNoWay';
import MuteQuack from './MuteQuack';

class DecoyDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new MuteQuack();
  }

  display() {
    console.log('DecoyDuck show');
  }
}

export default DecoyDuck;
