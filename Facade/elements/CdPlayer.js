var CdPlayer = function(){

};
CdPlayer.prototype.on = function(){
	console.log("CdPlayer is on!");
};
CdPlayer.prototype.off = function(){
	console.log("CdPlayer is off!");
};
CdPlayer.prototype.eject = function(){
	console.log("Eject Cd!");
};
CdPlayer.prototype.play = function(oCd){
	console.log("Playing " + oCd.sName);
};
CdPlayer.prototype.stop = function(){
	console.log("Stop CdPlayer!");
};