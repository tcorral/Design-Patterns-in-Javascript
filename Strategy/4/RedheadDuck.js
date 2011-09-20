var RedheadDuck = function(){
	Duck.apply(this);
	this.oFlyBehavior = new Quack();
	this.oQuackBehavior = new FlyWithWings();
};
RedheadDuck.prototype = new Duck();
RedheadDuck.prototype.display = function(){
	alert("RedheadDuck show");
};