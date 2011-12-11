var NYPizzaIngredientFactory = function(){
	PizzaIngredientFactory.apply(this);
};
NYPizzaIngredientFactory.prototype = new PizzaIngredientFactory();
NYPizzaIngredientFactory.prototype.createDough = function(){
	return new ThinCrustDough();
};
NYPizzaIngredientFactory.prototype.createSauce = function(){
	return new MarinaraSauce();
};
NYPizzaIngredientFactory.prototype.createCheese = function(){
	return new ReggianoCheese();
};
NYPizzaIngredientFactory.prototype.createVeggies = function(){
	return [new Garlic(), new Onion(), new Mushroom(), new RedPepper()];
};
NYPizzaIngredientFactory.prototype.createPepperoni = function(){

};
NYPizzaIngredientFactory.prototype.createClam = function(){

};
