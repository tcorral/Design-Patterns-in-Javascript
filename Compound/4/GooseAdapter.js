var GooseAdapter = function(oGoose){
	this.oGoose = oGoose;
};
GooseAdapter.prototype.quack = function(){
	this.oGoose.honk();
};
