var Subject = function(){
	this.registerObserver = function(oObserver){
		throw new Error("This method must be overwritten!");
	};
	this.removeObserver = function(oObserver){
		throw new Error("This method must be overwritten!");
	};
	this.notifyObservers = function(){
		throw new Error("This method must be overwritten!");
	};
};