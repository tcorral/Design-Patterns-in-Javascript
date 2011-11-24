var ChicagoStyleClamPizza = function(){
	Pizza.apply(this);
	this.sName = 'Chicago Style Deep Dish Cheese Pizza';
	this.sDough = 'Extra Thin Crust Dough';
	this.sSauce = 'Plum Tomato Sauce';
	this.aToppings = ["Shredded Mozzarella Cheese"];
};
ChicagoStyleClamPizza.prototype = new Pizza();
ChicagoStyleClamPizza.prototype.cut = function(){
	console.log("Cutting the pizza into square slices.");
};
