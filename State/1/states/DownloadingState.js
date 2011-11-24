var DownloadingState = function(oDownload)
{
	State.apply(this);
	this.oDownload = oDownload;
};
DownloadingState.prototype = new State();
DownloadingState.prototype.download = function(){
	throw new Error("You can't download a file that is downloading!");
};
DownloadingState.prototype.pause = function(){
	this.oDownload.setState(this.oDownload.getDownloadPausedState());
	console.log("Pause download!");
};
DownloadingState.prototype.fail = function(){
	this.oDownload.setState(this.oDownload.getDownloadedFailedState());
	console.log("Download has failed!");
};
DownloadingState.prototype.finish = function(){
	this.oDownload.setState(this.oDownload.getDownloadedState());
	console.log("Download has finished!");
};