var RedheadDuck = function(){
	Duck.apply(this);
	Quackable.call(this, function(){
		alert("Quack");
	});
	Flyable.call(this, function(){
		alert("Fly");
	});
};
RedheadDuck.prototype = new Duck();
RedheadDuck.prototype.display = function(){
	alert("RedheadDuck show");
};