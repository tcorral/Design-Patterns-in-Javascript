import QuackObservable from './QuackObservable';

class Observable extends QuackObservable {
  constructor(duck) {
    super();
    this.observers = [];
    this.duck = duck;
  }

  registerObserver(observer) {
    this.observers.push(observer);
  }

  notifyObservers() {
    var iterator = this.observers[Symbol.iterator]();
    while (iterator.hasNext()) {
      let observer = iterator.next();
      observer.update(this.duck);
    }
  }
}

export default Observable;
