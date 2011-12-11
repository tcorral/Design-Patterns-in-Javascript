var Amplifier = function(){
	this.nVolume = 0;
	this.oDvdPlayer = null;
	this.oCdPlayer = null;
	this.oTuner = null;
	this.bSurroundSound = false;
	this.bStereoSound = false;
};
Amplifier.prototype.on = function(){
	console.log("Projector is on!");
};
Amplifier.prototype.off = function(){
	console.log("Projector is off!");
};
Amplifier.prototype.setVolume = function(nVolume){
	this.nVolume = nVolume;
	console.log("Volume change to " + nVolume);
};
Amplifier.prototype.setDvdPlayer = function(oDvdPlayer){
	this.oDvdPlayer = oDvdPlayer;
	console.log("Plugged DVD Player to Amplifier!");
};
Amplifier.prototype.setCdPlayer = function(oCdPlayer){
	this.oCdPlayer = oCdPlayer;
	console.log("Plugged Cd Player to Amplifier!");
};
Amplifier.prototype.setTuner = function(oTuner){
	this.oTuner = oTuner;
	console.log("Plugged on DVD to Amplifier!");
};
Amplifier.prototype.setSurroundSound = function(){
	this.bSurroundSound = true;
	console.log("Listen SurroundSound!");
};
Amplifier.prototype.setStereoSound = function(){
	this.bStereoSound = true;
	console.log("Listen SurroundSound!");
};