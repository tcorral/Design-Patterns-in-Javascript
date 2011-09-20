var TurkeyAdapter = function(oTurkey){
	Duck.apply(this);
	this.oTurkey = oTurkey;
};
TurkeyAdapter.prototype = new Duck();
TurkeyAdapter.prototype.quack = function(){
	this.oTurkey.gobble();
};
TurkeyAdapter.prototype.fly = function(){
	var nFly = 0;
	var nLenFly = 5;
	for(; nFly < nLenFly;){
		this.oTurkey.fly();
		nFly = nFly + 1;
	}
};
