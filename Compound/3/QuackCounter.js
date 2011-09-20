var QuackCounter = function(oDuck){
	Quackable.apply(this);
	this.oDuck = oDuck;
	this.quack = function(){
		this.oDuck.quack();
		QuackCounter.nNumberOfQuacks = QuackCounter.nNumberOfQuacks + 1;
	};
};
QuackCounter.nNumberOfQuacks = 0;
QuackCounter.getQuacks = function(){
	return QuackCounter.nNumberOfQuacks;
};
