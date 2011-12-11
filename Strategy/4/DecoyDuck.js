var DecoyDuck = function(){
	Duck.apply(this);
	this.oFlyBehavior = new FlyNoWay();
	this.oQuackBehavior = new MuteQuack();
};
DecoyDuck.prototype = new Duck();
DecoyDuck.prototype.display = function(){
	alert("DecoyDuck show");
};
