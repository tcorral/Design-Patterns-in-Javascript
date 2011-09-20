var RubberDuck = function(){
	Duck.apply(this);
	this.oFlyBehavior = new FlyNoWay();
	this.oQuackBehavior = new Squeak();
};
RubberDuck.prototype = new Duck();
RubberDuck.prototype.display = function(){
	alert("RubberDuck show");
};