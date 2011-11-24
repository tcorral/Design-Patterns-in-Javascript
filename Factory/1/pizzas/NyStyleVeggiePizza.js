var NyStyleVeggiePizza = function(){
	Pizza.apply(this);
	this.sName = 'NY Style Sauce and Cheese Pizza';
	this.sDough = 'Thin Crust Dough';
	this.sSauce = 'Marinara sauce';
	this.aToppings = ["Grated Reggiano Cheese"];
};
NyStyleVeggiePizza.prototype = new Pizza();
