var Squeak = function(){
	QuackBehavior.apply(this);
};
Squeak.prototype = new QuackBehavior();
Squeak.prototype.quack = function(){
	alert("Squeze");
};
