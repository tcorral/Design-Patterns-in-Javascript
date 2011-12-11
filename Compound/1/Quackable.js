var Quackable = function(){
	this.quack = function(){
		throw new Error("This method must be overwritten!");
	};
};
