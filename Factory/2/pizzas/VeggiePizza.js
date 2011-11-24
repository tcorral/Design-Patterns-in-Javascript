var VeggiePizza = function(oIngredientFactory){
	Pizza.apply(this);
	this.oIngredientFactory = oIngredientFactory;
};
VeggiePizza.prototype = new Pizza();
VeggiePizza.prototype.prepare = function(){
	console.log("Preparing " + this.sName);
	this.oDough = this.oIngredientFactory.createDough();
	this.oSauce = this.oIngredientFactory.createSauce();
	this.oCheese = this.oIngredientFactory.createCheese();
};
