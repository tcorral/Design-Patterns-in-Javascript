var SimpleRemoteControl = function(){
	this.oCommand = null;
};
SimpleRemoteControl.prototype.setCommand = function(oCommand){
	this.oCommand = oCommand;
};
SimpleRemoteControl.prototype.buttonWasPressed = function(){
	this.oCommand.execute();
};
SimpleRemoteControl.prototype.buttonUndoWasPressed = function(){
	this.oCommand.undo();
};