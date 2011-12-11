var WinnerState = function(oGumballMachine){
	this.oGumballMachine = oGumballMachine;
};
WinnerState.prototype.insertQuarter = function(){
	console.log("Please wait, we're already giving you a gumball!");
};
WinnerState.prototype.ejectQuarter = function(){
	console.log("Sorry, you already turned the crank!");
};
WinnerState.prototype.turnCrank = function(){
	console.log("Turning twice doesn't get you another gumball!");
};
WinnerState.prototype.dispense = function(){
	console.log("You're a Winner! You get two gumball for your quarter!");
	this.oGumballMachine.releaseBall();
	this.oGumballMachine.releaseBall();
	if(this.oGumballMachine.getCount() > 0){
		this.oGumballMachine.setState(this.oGumballMachine.getNoQuarterState());
	}else{
		console.log("Oops!, out of gumballs!");
		this.oGumballMachine.setState(this.oGumballMachine.getSoldOutState());
	}
};