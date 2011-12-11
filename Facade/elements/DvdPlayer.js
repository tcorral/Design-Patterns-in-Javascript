var DvdPlayer = function(){

};
DvdPlayer.prototype.on = function(){
	console.log("DvdPlayer is on!");
};
DvdPlayer.prototype.off = function(){
	console.log("DvdPlayer is off!");
};
DvdPlayer.prototype.eject = function(){
	console.log("Eject Dvd!");
};
DvdPlayer.prototype.play = function(oMovie){
	console.log("Playing " + oMovie.sName);
};
DvdPlayer.prototype.stop = function(){
	console.log("Stop DvdPlayer!");
};