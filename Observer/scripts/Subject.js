class Subject {
  registerObserver() {
    throw new Error("This method must be overwritten!");
  }

  removeObserver() {
    throw new Error("This method must be overwritten!");
  }

  notifyObservers() {
    throw new Error("This method must be overwritten!");
  }
}

export default Subject;
