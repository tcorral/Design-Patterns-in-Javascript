var RubberDuck = function(){
	Duck.apply(this);
	Quackable.call(this, function(){
		alert("Squeze");
	});
};
RubberDuck.prototype = new Duck();
RubberDuck.prototype.display = function(){
	alert("RubberDuck show");
};