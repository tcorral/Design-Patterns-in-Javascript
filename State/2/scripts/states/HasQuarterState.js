var HasQuarterState = function(oGumballMachine){
	this.nRandomWinner = Math.random();
	this.oGumballMachine = oGumballMachine;
};
HasQuarterState.prototype.insertQuarter = function(){
	console.log("You can't insert other quarter!");
};
HasQuarterState.prototype.ejectQuarter = function(){
	console.log("Quarter returned");
	this.oGumballMachine.setState(this.oGumballMachine.getNoQuarterState());
};
HasQuarterState.prototype.turnCrank = function(){
	console.log("You turned...");
	if(this.nRandomWinner < 0.20){
		console.log("Winner state");
		this.oGumballMachine.setState(this.oGumballMachine.getWinnerState());
	}else{
		console.log("Sold state");
		this.oGumballMachine.setState(this.oGumballMachine.getSoldState());
	}
};
HasQuarterState.prototype.dispense = function(){
	console.log("No gumball dispensed!");
};