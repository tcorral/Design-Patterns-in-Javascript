import State from './State';

class HasQuarterState extends State {
  constructor(gumballMachine) {
    super(gumballMachine);
    this.randomWinner = Math.random();
  }

  insertQuarter() {
    console.log('You can not insert another quarter!');
  }

  ejectQuarter() {
    console.log('Quarter returned!');
    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
  }

  turnCrank() {
    console.log("You turned...");
    if (this.randomWinner < 0.20) {
      console.log("Winner state");
      this.gumballMachine.setState(this.gumballMachine.getWinnerState());
    } else {
      console.log("Sold state");
      this.gumballMachine.setState(this.gumballMachine.getSoldState());
    }
  }

  dispense() {
    console.log("No gumball dispensed!");
  }
}

export default HasQuarterState;
