var CafeineBeverage = function(){

};
CafeineBeverage.prototype.prepareRecipe = function(){
	this.boilWater();
	this.brew();
	this.pourOnCup();
	if(this.customerWantsCondiments()){
		this.addCondiments();
	}	
};
CafeineBeverage.prototype.boilWater = function(){
	console.log("Put water on fire until the water starts boiling!");
};
CafeineBeverage.prototype.pourOnCup = function(){
	console.log("Put beverage on Cup!");
};
CafeineBeverage.prototype.brew = function(){
	throw new Error("This method mus be overwritten!");
};
CafeineBeverage.prototype.addCondiments = function(){
	throw new Error("This method mus be overwritten!");
};
CafeineBeverage.prototype.customerWantsCondiments = function(){
	return true;
};
