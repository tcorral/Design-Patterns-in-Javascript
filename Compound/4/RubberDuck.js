var DuckCall = function(){
	Quackable.apply(this);
	this.quack = function(){
		console.log("Squeak!");
	};
};
