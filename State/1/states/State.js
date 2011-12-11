var State = function(){
	
};
State.prototype.download = function(){
	throw new Error("This method must be overwritten!");
};
State.prototype.pause = function(){
	throw new Error("This method must be overwritten!");
};
State.prototype.fail = function(){
	throw new Error("This method must be overwritten!");
};
State.prototype.finish = function(){
	throw new Error("This method must be overwritten!");
};
