var Quackable = function(){
	QuackObservable.apply(this);
	this.quack = function(){
		throw new Error("This method must be overwritten!");
	};
	this.registerObserver = function(oObserver){
		throw new Error("This method must be overwritten!");
	};
	this.notifyObservers = function(){
		throw new Error("This method must be overwritten!");
	};
};
