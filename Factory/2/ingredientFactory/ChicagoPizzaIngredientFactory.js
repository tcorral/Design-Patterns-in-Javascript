var ChicagoPizzaIngredientFactory = function(){
	PizzaIngredientFactory.apply(this);
};
ChicagoPizzaIngredientFactory.prototype = new PizzaIngredientFactory();
ChicagoPizzaIngredientFactory.prototype.createDough = function(){
	return new ThinCrustDough();
};
ChicagoPizzaIngredientFactory.prototype.createSauce = function(){
	return new MarinaraSauce();
};
ChicagoPizzaIngredientFactory.prototype.createCheese = function(){
	return new ReggianoCheese();
};
ChicagoPizzaIngredientFactory.prototype.createVeggies = function(){
	var aVeggies = [new Garlic(), new Onion(), new Mushroom(), new RedPepper()];
	return aVeggies;
};
ChicagoPizzaIngredientFactory.prototype.createPepperoni = function(){

};
ChicagoPizzaIngredientFactory.prototype.createClam = function(){

};
