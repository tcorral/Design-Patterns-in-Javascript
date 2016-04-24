class AbstractDuckFactory {
  createMallardDuck() {
    throw new Error("This method must be overwritten!");
  }

  createRedheadDuck() {
    throw new Error("This method must be overwritten!");
  }

  createDuckCall() {
    throw new Error("This method must be overwritten!");
  }

  createRubberDuck() {
    throw new Error("This method must be overwritten!");
  }
}

export default AbstractDuckFactory;
