var PizzaStore = function(){

};
PizzaStore.prototype.orderPizza = function(sType){
	var oPizza = null;
	oPizza = this.createPizza(sType);

	oPizza.prepare();
	oPizza.bake();
	oPizza.cut();
	oPizza.box();
};
PizzaStore.prototype.createPizza = function(){
	throw new Error("This method must be overwritten!");
};
