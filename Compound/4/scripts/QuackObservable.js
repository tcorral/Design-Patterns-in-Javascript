class QuackObservable {
  registerObserver() {
    throw new Error("This method must be overwritten!");
  }

  notifyObservers() {
    throw new Error("This method must be overwritten!");
  }
}

export default QuackObservable;
