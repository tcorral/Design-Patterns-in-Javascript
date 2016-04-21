var GumballMachine = function() {
  this.oState = new NoQuarterState(this);
  this.nGumballs = 10;
};
GumballMachine.prototype.insertQuarter = function() {
  this.oState.insertQuarter();
};
GumballMachine.prototype.ejectQuarter = function() {
  this.oState.ejectQuarter();
};
GumballMachine.prototype.turnCrank = function() {
  this.oState.turnCrank();
};
GumballMachine.prototype.dispense = function() {
  this.oState.dispense();
};
GumballMachine.prototype.getCount = function() {
  return this.nGumballs;
};
GumballMachine.prototype.releaseBall = function() {
  console.log("Get a gumball!");
  this.nGumballs = this.nGumballs - 1;
};
GumballMachine.prototype.setState = function(oState) {
  this.oState = oState;
};
GumballMachine.prototype.getNoQuarterState = function() {
  return new NoQuarterState(this);
};
GumballMachine.prototype.getHasQuarterState = function() {
  return new HasQuarterState(this);
};
GumballMachine.prototype.getSoldOutState = function() {
  return new SoldOutState(this);
};
GumballMachine.prototype.getSoldState = function() {
  return new SoldState(this);
};
GumballMachine.prototype.getWinnerState = function() {
  return new WinnerState(this);
};
