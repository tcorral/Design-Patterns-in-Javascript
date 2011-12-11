var Duck = function(){

};
Duck.prototype.fly = function(){
	throw new Error("This method must be overwritten!");
};
Duck.prototype.quack = function(){
	throw new Error("This method must be overwritten!");
};
