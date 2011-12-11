var HomeTheaterFacade = function( oAmplifier, oTuner, oDvdPlayer, oCdPlayer, oProjector, oTheaterLights, oScreen, oPopcornPopper){
	this.oAmplifier = oAmplifier;
	this.oTuner = oTuner;
	this.oDvdPlayer = oDvdPlayer;
	this.oCdPlayer = oCdPlayer;
	this.oProyector = oProjector;
	this.oTheaterLights = oTheaterLights;
	this.oScreen = oScreen;
	this.oPopcornPopper = oPopcornPopper;
};
HomeTheaterFacade.prototype.watchMovie = function(oMovie){
	console.log("Get ready to watch a movie...");
	this.oPopcornPopper.on();
	this.oPopcornPopper.pop();
	this.oTheaterLights.off();
	this.oScreen.down();
	this.oProyector.on();
	this.oProyector.wideScreenMode();
	this.oAmplifier.on();
	this.oAmplifier.setDvdPlayer(this.oDvdPlayer);
	this.oAmplifier.setSurroundSound();
	this.oAmplifier.setVolume(5);
	this.oDvdPlayer.on();
	this.oDvdPlayer.play(oMovie);
};
HomeTheaterFacade.prototype.endMovie = function(){
	console.log("Shutting movie theater down...");
	this.oPopcornPopper.off();
	this.oTheaterLights.on();
	this.oScreen.up();
	this.oProyector.off();
	this.oAmplifier.off();
	this.oDvdPlayer.stop();
	this.oDvdPlayer.eject();
	this.oDvdPlayer.off();
};
HomeTheaterFacade.prototype.listenToCd = function(oCd){
	console.log("Start listening your music...");
	this.oAmplifier.on();
	this.oAmplifier.setCdPlayer(this.oCdPlayer);
	this.oAmplifier.setStereoSound();
	this.oAmplifier.setVolume(5);
	this.oCdPlayer.on();
	this.oCdPlayer.play(oCd);
};
HomeTheaterFacade.prototype.endCd = function(){
	console.log("End listening your music or the Cd has finished!");
	this.oAmplifier.off();
	this.oCdPlayer.stop();
	this.oCdPlayer.eject();
	this.oCdPlayer.off();
};
HomeTheaterFacade.prototype.listenToRadio = function(){
	console.log("Start listening your favorite radio station...");
	this.oAmplifier.on();
	this.oAmplifier.setTuner(this.oTuner);
	this.oAmplifier.setStereoSound();
	this.oAmplifier.setVolume(5);
	this.oTuner.on();
	this.oTuner.setFm();
	this.oTuner.setFrequency(90.9);
};
HomeTheaterFacade.prototype.endRadio = function(){
	console.log("End listening your favorite radio station...");
	this.oAmplifier.off();
	this.oTuner.off();
};