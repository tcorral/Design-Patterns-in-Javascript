var DownloadedState = function(oDownload)
{
	State.apply(this);
	this.oDownload = oDownload;
};
DownloadedState.prototype = new State();
DownloadedState.prototype.download = function(){
	this.oDownload.setState(this.oDownload.getDownloadingState());
	console.log("Download again!");
};
DownloadedState.prototype.pause = function(){
	throw new Error("You can't pause a downloaded file!");
};
DownloadedState.prototype.fail = function(){
	throw new Error("A downloaded file can't fail!");
};
DownloadedState.prototype.finish = function(){
	throw new Error("A downloaded file can't finish itself!");
};