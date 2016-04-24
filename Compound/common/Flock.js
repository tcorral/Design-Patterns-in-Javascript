import Quackable from './Quackable';

class Flock extends Quackable {
  constructor() {
    super();
    this.quackers = [];
  }

  quack() {
    let iterator = this.quackers[Symbol.iterator]();
    let quacker = iterator.next();

    while (quacker.value) {
      quacker.value.quack();
      quacker = iterator.next();
    }
  }

  add(quackable) {
    this.quackers.push(quackable);
  }
}

export default Flock;
