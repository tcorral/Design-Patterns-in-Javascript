var DownloadPausedState = function(oDownload)
{
	State.apply(this);
	this.oDownload = oDownload;
};
DownloadPausedState.prototype = new State();
DownloadPausedState.prototype.download = function(){
	this.oDownload.setState(this.oDownload.getDownloadingState());
	console.log("Continue Download!");
};
DownloadPausedState.prototype.pause = function(){
	throw new Error("You can't pause a paused download!");
};
DownloadPausedState.prototype.fail = function(){
	this.oDownload.setState(this.oDownload.getDownloadedFailedState());
	console.log("Download has failed!");
};
DownloadPausedState.prototype.finish = function(){
	this.oDownload.setState(this.oDownload.getDownloadedState());
	console.log("Download has finished!");
};