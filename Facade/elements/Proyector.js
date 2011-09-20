var Proyector = function(){
	this.bWideScreenMode = false;
};
Proyector.prototype.on = function(){
	console.log("Proyector is on!");
};
Proyector.prototype.off = function(){
	console.log("Proyector is off!");
};
Proyector.prototype.wideScreenMode = function(){
	this.bWideScreenMode = true;
	console.log("Proyector now is on wide screen mode!");
};
