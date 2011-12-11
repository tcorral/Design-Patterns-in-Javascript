var SoldOutState = function(oGumballMachine){
	this.oGumballMachine = oGumballMachine;
};
SoldOutState.prototype.insertQuarter = function(){
	console.log("You inserted a quarter!");
	this.oGumballMachine.setState(this.oGumballMachine.getHasQuarterState());
};
SoldOutState.prototype.ejectQuarter = function(){
	console.log("You haven't inserted a quarter!");
};
SoldOutState.prototype.turnCrank = function(){
	console.log("You turned, but there is no quarter");
};
SoldOutState.prototype.dispense = function(){
	console.log("You must to pay first!");
};