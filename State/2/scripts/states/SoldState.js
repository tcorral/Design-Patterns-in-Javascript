import State from './State';

class SoldState extends State {
  insertQuarter() {
    console.log("Please wait, we're already giving you a gumball!");
  }

  ejectQuarter() {
    console.log("Sorry, you already turned the crank!");
  }

  turnCrank() {
    console.log("Turning twice doesn't get you another gumball!");
  }

  releaseBall() {
    console.log('Gum is being released.');
    this.gumballMachine.gumballs--;
  }

  dispense() {
    if (this.gumballMachine.getCount() > 0) {
      this.gumballMachine.releaseBall();
      this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    } else {
      console.log("Oops!, out of gumballs!");
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
    }
  }
}

export default SoldState;
