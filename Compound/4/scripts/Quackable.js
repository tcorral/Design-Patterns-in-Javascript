import QuackObservable from './QuackObservable';

class Quackable extends QuackObservable {
  quack() {
    throw new Error("This method must be overwritten!");
  }
}

export default Quackable;
