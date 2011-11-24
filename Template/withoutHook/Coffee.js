var Coffee = function(){
	CaffeineBeverage.apply(this);
};
Coffee.prototype = new CaffeineBeverage();
Coffee.prototype.brew = function(){
	console.log("Dripping Coffee through filter!");
};
Coffee.prototype.addCondiments = function(){
	console.log("Add Sugar and Milk!");
};
