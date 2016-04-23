import Quackable from './Quackable';
import Observable from './Observable';

class MallardDuck extends Quackable {
  constructor() {
    super();
    this.observable = new Observable(this);
  }

  registerObserver(observer) {
    this.observable.registerObserver(observer);
  }

  notifyObservers() {
    this.observable.notifyObservers();
  }

  quack() {
    console.log('Quack!');
    this.notifyObservers();
  }
}

export default MallardDuck;
