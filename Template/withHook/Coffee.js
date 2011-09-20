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
Coffee.prototype.customerWantsCondiments = function(){
	var bCustomerInput = confirm("Do you want sugar and milk?");
	return bCustomerInput;
};
