var ClamPizza = function(oIngredientFactory){
	Pizza.apply(this);
	this.oIngredientFactory = oIngredientFactory;
};
ClamPizza.prototype = new Pizza();
ClamPizza.prototype.prepare = function(){
	console.log("Preparing " + this.sName);
	this.oDough = this.oIngredientFactory.createDough();
	this.oSauce = this.oIngredientFactory.createSauce();
	this.oCheese = this.oIngredientFactory.createCheese();
	this.oClams = this.oIngredientFactory.createClam();
};
