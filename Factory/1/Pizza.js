var Pizza = function(){
	this.sName = '';
	this.sDough = '';
	this.sSauce = '';
	this.aToppings = [];
};
Pizza.prototype.prepare = function(){
	var nTopping = 0;
	var nLenToppings = this.aToppings.length;
	var sTopping = '';

	console.log("Preparing " + this.sName);
	console.log("Tossing dough...");
	console.log("Adding sauce");
	console.log("Adding toppings:");

	for(; nTopping < nLenToppings;)
	{
		sTopping = this.aToppings[nTopping];
		console.log(sTopping + "  ");
		nTopping = nTopping + 1;
	}
};
Pizza.prototype.bake = function(){
	console.log("Bake for 25 minutes at 350");
};
Pizza.prototype.cut = function(){
	console.log("Cutting the pizza into diagonal slices");
};
Pizza.prototype.box = function(){
	console.log("Place pizza in official PizzaStore box");
};
Pizza.prototype.getName = function(){
	return this.sName;
};