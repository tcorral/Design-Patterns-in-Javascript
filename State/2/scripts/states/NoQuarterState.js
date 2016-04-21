var NoQuarterState = function(oGumballMachine){
	this.oGumballMachine = oGumballMachine;
};
NoQuarterState.prototype.insertQuarter = function(){
	console.log("You inserted a quarter!");
	this.oGumballMachine.setState(this.oGumballMachine.getHasQuarterState());
};
NoQuarterState.prototype.ejectQuarter = function(){
	console.log("You haven't inserted a quarter!");
};
NoQuarterState.prototype.turnCrank = function(){
	console.log("You turned, but there is no quarter");
};
NoQuarterState.prototype.dispense = function(){
	console.log("You must to pay first!");
};