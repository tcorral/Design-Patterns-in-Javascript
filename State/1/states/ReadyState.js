var ReadyState = function(oDownload)
{
	State.apply(this);
	this.oDownload = oDownload;
};
ReadyState.prototype = new State();
ReadyState.prototype.download = function(){
	this.oDownload.setState(this.oDownload.getDownloadingState());
	console.log("Start Download!");
};
ReadyState.prototype.pause = function(){
	throw new Error("You can't pause a not started download!");
};
ReadyState.prototype.fail = function(){
	throw new Error("A download can't file if is not started!");
};
ReadyState.prototype.finish = function(){
	throw new Error("A download can't finish if is not started!");
};