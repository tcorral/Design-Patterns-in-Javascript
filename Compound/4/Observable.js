var Observable = function(oDuck){
	QuackObservable.apply(this);
	this.aObservers = [];
	this.oDuck = oDuck;
	this.registerObserver = function(oObserver){
		this.aObservers.push(oObserver);
	};
	this.notifyObservers = function(oObserver){
		var oIterator = new ConvertToIterator(this.aObservers);
		var oObserver = null;
		while(oIterator.hasNext()){
			oObserver = oIterator.next();
			oObserver.update(this.oDuck);
		}
	};
};
