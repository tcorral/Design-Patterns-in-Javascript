import Quackable from './Quackable';

let counter = 0;
class QuackCounter extends Quackable {
  constructor(duck) {
    super();
    counter = 0;
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
