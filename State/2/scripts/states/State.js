class State {
  constructor(gumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter() {
    throw new Error("This method must be overwritten!");
  }

  releaseBall() {
    throw new Error("This method must be overwritten!");
  }

  ejectQuarter() {
    throw new Error("This method must be overwritten!");
  }

  turnCrank() {
    throw new Error("This method must be overwritten!");
  }

  dispense() {
    throw new Error("This method must be overwritten!");
  }
}

export default State;
