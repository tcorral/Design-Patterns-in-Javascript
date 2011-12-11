var Flock = function(){
	Quackable.apply(this);
	this.oObservable = new Observable(this);
	this.quack = function(){
		var oIterator = new ConvertToIterator(this.aQuackers);
		var oQuacker = null;
		while(oIterator.hasNext()){
			oQuacker = oIterator.next();
			oQuacker.quack();
		}
	};
	this.registerObserver = function(oObserver){
		this.oObservable.registerObserver(oObserver);
	};
	this.notifyObservers = function(){
		this.oObservable.notifyObservers();
	};
	this.aQuackers = [];
};
Flock.prototype.add = function(oQuackable){
	this.aQuackers.push(oQuackable);
};