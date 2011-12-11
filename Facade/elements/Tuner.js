var Tuner = function(){
	this.oAmplifier = null;
	this.nFrequency = 0;
};
Tuner.prototype.on = function(){
	console.log("Tuner is on!");
};
Tuner.prototype.off = function(){
	console.log("Tuner is off!");
};
Tuner.prototype.setAm = function(){
	console.log("Tuner AM!");
};
Tuner.prototype.setFm = function(){
	console.log("Tuner FM!");
};
Tuner.prototype.setFrequency = function(nFrequency){
	this.nFrequency = nFrequency;
	console.log("Tuner frequency changed to " + nFrequency);
};