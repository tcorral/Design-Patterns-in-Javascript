var LightOnCommand = function(oLight){
	Command.apply(this);
	this.oLight = oLight;
};
LightOnCommand.prototype = new Command();
LightOnCommand.prototype.execute = function(){
	this.oLight.on();
};
LightOnCommand.prototype.undo = function(){
	this.oLight.off();
};
