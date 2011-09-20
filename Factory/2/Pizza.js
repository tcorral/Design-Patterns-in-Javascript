var Pizza = function(){
	this.sName = '';
	this.oDough = null;
	this.oSauce = null;
	this.aVeggies = [];
	this.oCheese = null;
	this.oPepperoni = null;
	this.oClams = null;
};
Pizza.prototype.prepare = function(){
	throw new Error("This method must be overwritten!");
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
Pizza.prototype.setName = function(sName){
	this.sName = sName;
};