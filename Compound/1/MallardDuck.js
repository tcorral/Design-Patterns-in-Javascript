var MallardDuck = function(){
	Quackable.apply(this);
	this.quack = function(){
		console.log("Quack!");
	};
};
