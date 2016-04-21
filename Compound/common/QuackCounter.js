import Quackable from './Quackable';

var counter = 0;
class QuackCounter extends Quackable {
  constructor(duck) {
    super();
    this.duck = duck;
  }

  static get quacks() {
    return counter;
  }

  static getQuacks() {
    return counter;
  }

  quack() {
    this.duck.quack();
    counter++;
  }
}

export default QuackCounter;
