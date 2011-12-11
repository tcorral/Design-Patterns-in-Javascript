var Projector = function(){
	this.bWideScreenMode = false;
};
Projector.prototype.on = function(){
	console.log("Projector is on!");
};
Projector.prototype.off = function(){
	console.log("Projector is off!");
};
Projector.prototype.wideScreenMode = function(){
	this.bWideScreenMode = true;
	console.log("Projector now is on wide screen mode!");
};
