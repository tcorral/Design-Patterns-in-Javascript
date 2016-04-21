import State from './State';

var DownloadFailedState = function(oDownload)
{
	State.apply(this);
	this.oDownload = oDownload;
};
DownloadFailedState.prototype = new State();
DownloadFailedState.prototype.download = function(){
	this.oDownload.setState(this.oDownload.getDownloadingState());
	console.log("Try to Download again!");
};
DownloadFailedState.prototype.pause = function(){
	throw new Error("You can't pause a failed download!");
};
DownloadFailedState.prototype.fail = function(){
	throw new Error("A failed download can't fail itself!");
};
DownloadFailedState.prototype.finish = function(){
	throw new Error("A failed download is not finished!");
};
