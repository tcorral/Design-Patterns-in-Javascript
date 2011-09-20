var ChicagoPizzaStore = function(){
	PizzaStore.apply(this);
};
ChicagoPizzaStore.prototype = new PizzaStore();
ChicagoPizzaStore.prototype.createPizza = function(sType){
	if(sType === 'cheese'){
		return new ChicagoStyleCheesePizza();
	}else if(sType === 'veggie'){
		return new ChicagoStyleVeggiePizza();
	}else if(sType === 'clam'){
		return new ChicagoStyleClamPizza();
	}else if(sType === 'pepperoni'){
		return new ChicagoStylePepperoniPizza();
	}
	return null;
};
