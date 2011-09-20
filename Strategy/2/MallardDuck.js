var MallardDuck = function(){
	Duck.apply(this);
};
MallardDuck.prototype = new Duck();
MallardDuck.prototype.display = function(){
	alert("MallardDuck show");
};
