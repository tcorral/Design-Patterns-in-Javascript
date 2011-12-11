var ChicagoPizzaStore = function(){
	PizzaStore.apply(this);
};
ChicagoPizzaStore.prototype = new PizzaStore();
ChicagoPizzaStore.prototype.createPizza = function(sType){
	var oPizza = null;
	var oIngredientFactory = new ChicagoPizzaIngredientFactory();
	if(sType === 'cheese'){
		oPizza = new CheesePizza(oIngredientFactory);
		oPizza.setName("Chicago Style Cheese Pizza");
	}else if(sType === 'veggie'){
		oPizza = new VeggiePizza(oIngredientFactory);
		oPizza.setName("Chicago Style Veggie Pizza");
	}else if(sType === 'clam'){
		oPizza = new ClamPizza(oIngredientFactory);
		oPizza.setName("Chicago Style Clam Pizza");
	}else if(sType === 'pepperoni'){
		oPizza = new PepperoniPizza(oIngredientFactory);
		oPizza.setName("Chicago Style Pepperoni Pizza");
	}
	return oPizza;
};