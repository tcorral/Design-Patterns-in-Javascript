var State = function(oGumballMachine){
	this.oGumballMachine = oGumballMachine;
};
State.prototype.insertQuarter = function(){
	throw new Error("This method must be overwritten!");
};
State.prototype.ejectQuarter = function(){
	throw new Error("This method must be overwritten!");
};
State.prototype.turnCrank = function(){
	throw new Error("This method must be overwritten!");
};
State.prototype.dispense = function(){
	throw new Error("This method must be overwritten!");
};