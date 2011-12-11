var MallardDuck = function(){
	Duck.apply(this);
	this.oFlyBehavior = new Quack();
	this.oQuackBehavior = new FlyWithWings();
};
MallardDuck.prototype = new Duck();
MallardDuck.prototype.display = function(){
	alert("MallardDuck show");
};
