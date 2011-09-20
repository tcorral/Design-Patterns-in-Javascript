var Download = function(){
	this.oState = new ReadyState(this);
};
Download.prototype.setState = function(oState){
	this.oState = oState;
};
Download.prototype.download = function(){
	this.oState.download();
};
Download.prototype.pause = function(){
	this.oState.pause();
};
Download.prototype.fail = function(){
	this.oState.fail();
};
Download.prototype.finish = function(){
	this.oState.finish();
};
Download.prototype.getReadyState = function()
{
	return new ReadyState(this);
};
Download.prototype.getDownloadingState = function()
{
	return new DownloadingState(this);
};
Download.prototype.getDownloadPausedState = function()
{
	return new DownloadPausedState(this);
};
Download.prototype.getDownloadedState = function()
{
	return new DownloadedState(this);
};
Download.prototype.getDownloadedFailedState = function()
{
	return new DownloadedFailedState(this);
};