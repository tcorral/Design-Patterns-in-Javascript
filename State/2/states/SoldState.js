var SoldState = function(oGumballMachine){
	this.oGumballMachine = oGumballMachine;
};
SoldState.prototype.insertQuarter = function(){
	console.log("Please wait, we're already giving you a gumball!");
};
SoldState.prototype.ejectQuarter = function(){
	console.log("Sorry, you already turned the crank!");
};
SoldState.prototype.turnCrank = function(){
	console.log("Turning twice doesn't get you another gumball!");
};
SoldState.prototype.dispense = function(){
	this.oGumballMachine.releaseBall();
	if(this.oGumballMachine.getCount() > 0){
		this.oGumballMachine.setState(this.oGummballMachine.getNoQuarterState());
	}else{
		console.log("Ooops!, out of gumballs!");
		this.oGumballMachine.setState(this.oGummballMachine.getSoldOutState());
	}
};