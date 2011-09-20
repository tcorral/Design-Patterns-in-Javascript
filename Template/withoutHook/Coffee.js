var Coffee = function(){
	CafeineBeverage.apply(this);
};
Coffee.prototype = new CafeineBeverage();
Coffee.prototype.brew = function(){
	console.log("Dripping Coffe throug filter!");
};
Coffee.prototype.addCondiments = function(){
	console.log("Add Sugar and Milk!");
};
