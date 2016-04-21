var CaffeineBeverage = function() {

};
CaffeineBeverage.prototype.prepareRecipe = function() {
  this.boilWater();
  this.brew();
  this.pourOnCup();
  if (this.customerWantsCondiments()) {
    this.addCondiments();
  }
};
CaffeineBeverage.prototype.boilWater = function() {
  console.log("Put water on fire until the water starts boiling!");
};
CaffeineBeverage.prototype.pourOnCup = function() {
  console.log("Put beverage on Cup!");
};
CaffeineBeverage.prototype.brew = function() {
  throw new Error("This method mus be overwritten!");
};
CaffeineBeverage.prototype.addCondiments = function() {
  throw new Error("This method mus be overwritten!");
};
CaffeineBeverage.prototype.customerWantsCondiments = function() {
  return true;
};
