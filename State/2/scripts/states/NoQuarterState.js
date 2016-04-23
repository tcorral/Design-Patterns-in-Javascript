import State from './State';

class NoQuarterState extends State {
  insertQuarter() {
    console.log("You inserted a quarter!");
    this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
  }

  ejectQuarter() {
    console.log("You haven't inserted a quarter!");
  }

  turnCrank() {
    console.log("You turned, but there is no quarter");
  }

  dispense() {
    console.log("You must to pay first!");
  }
}

export default NoQuarterState;
