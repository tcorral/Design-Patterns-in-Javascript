var MallardDuck = function(){
	Duck.apply(this);
};
MallardDuck.prototype = new Duck();
MallardDuck.prototype.fly = function(){
	console.log("Can fly long distances!");
};
MallardDuck.prototype.quack = function(){
	console.log("Quack! Quack!");
};