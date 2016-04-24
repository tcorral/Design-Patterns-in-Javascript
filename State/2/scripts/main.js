import GumballMachine from './GumballMachine';

var oGumballMachine = new GumballMachine();

$("#insert_quarter_button").click(function() {
  oGumballMachine.insertQuarter();
});
$("#release_quarter_button").click(function() {
  oGumballMachine.ejectQuarter();
});
$("#turn_crank_button").click(function() {
  oGumballMachine.turnCrank();
  oGumballMachine.dispense();
});
