var Flock = function(){
	Quackable.apply(this);
	this.quack = function(){
		var oIterator = new ConvertToIterator(this.aQuackers);
		var oQuacker = null;
		while(oIterator.hasNext()){
			oQuacker = oIterator.next();
			oQuacker.quack();
		}
	};
	this.aQuackers = [];
};
Flock.prototype.add = function(oQuackable){
	this.aQuackers.push(oQuackable);
};