import NoQuarterState from './states/NoQuarterState';
import HasQuarterState from './states/HasQuarterState';
import SoldOutState from './states/SoldOutState';
import SoldState from './states/SoldState';
import WinnerState from './states/WinnerState';

class GumballMachine {
  constructor() {
    this.state = new NoQuarterState(this);
    this.gumballs = 10;
  }

  insertQuarter() {
    this.state.insertQuarter();
  }

  ejectQuarter() {
    this.state.ejectQuarter();
  }

  turnCrank() {
    this.state.turnCrank();
  }

  dispense() {
    this.state.dispense();
  }

  getCount() {
    return this.gumballs;
  }

  releaseBall() {
    this.state.releaseBall();
  }

  setState(state) {
    this.state = state;
  }

  getNoQuarterState() {
    return new NoQuarterState(this);
  }

  getHasQuarterState() {
    return new HasQuarterState(this);
  }

  getSoldOutState() {
    return new SoldOutState(this);
  }

  getSoldState() {
    return new SoldState(this);
  }

  getWinnerState() {
    return new WinnerState(this);
  }
}

export default GumballMachine;
