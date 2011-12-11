var DecoyDuck = function(){
	Duck.apply(this);
};
DecoyDuck.prototype = new Duck();
DecoyDuck.prototype.display = function(){
	alert("DecoyDuck show");
};
DecoyDuck.prototype.quack = function(){
	// Don't do anything.
};
DecoyDuck.prototype.fly = function(){
	// Don't do anything.
};
