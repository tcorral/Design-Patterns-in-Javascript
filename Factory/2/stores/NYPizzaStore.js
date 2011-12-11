var NYPizzaStore = function(){
	PizzaStore.apply(this);
};
NYPizzaStore.prototype = new PizzaStore();
NYPizzaStore.prototype.createPizza = function(sType){
	var oPizza = null;
	var oIngredientFactory = new NYPizzaIngredientFactory();
	if(sType === 'cheese'){
		oPizza = new CheesePizza(oIngredientFactory);
		oPizza.setName("New York Style Cheese Pizza");
	}else if(sType === 'veggie'){
		oPizza = new VeggiePizza(oIngredientFactory);
		oPizza.setName("New York Style Veggie Pizza");
	}else if(sType === 'clam'){
		oPizza = new ClamPizza(oIngredientFactory);
		oPizza.setName("New York Style Clam Pizza");
	}else if(sType === 'pepperoni'){
		oPizza = new PepperoniPizza(oIngredientFactory);
		oPizza.setName("New York Style Pepperoni Pizza");
	}
	return oPizza;
};
