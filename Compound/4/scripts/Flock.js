import Observable from './Observable';
import Flock from '../../common/Flock';

class FlockObservable extends Flock {
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
}

export default FlockObservable;
