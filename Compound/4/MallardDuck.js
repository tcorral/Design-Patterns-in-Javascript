var MallardDuck = function(){
	Quackable.apply(this);
	this.oObservable = new Observable(this);
	this.quack = function(){
		console.log("Quack!");
		this.notifyObservers();
	};
	this.registerObserver = function(oObserver){
		this.oObservable.registerObserver(oObserver);
	};
	this.notifyObservers = function(){
		this.oObservable.notifyObservers();
	};
};
