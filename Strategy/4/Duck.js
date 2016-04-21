var Duck = function() {
  this.oFlyBehavior = null;
  this.oQuackBehavior = null;
};
Duck.prototype.setFlyBehavior = function(oFlyBehavior) {
  this.oFlyBehavior = oFlyBehavior;
};
Duck.prototype.setQuackBehavior = function(oQuackBehavior) {
  this.oQuackBehavior = oQuackBehavior;
};
Duck.prototype.performFly = function() {
  this.oFlyBehavior.fly();
};
Duck.prototype.performQuack = function() {
  this.oQuackBehavior.quack();
};
Duck.prototype.swim = function() {
  alert("Chop!");
};
Duck.prototype.display = function() {
  throw new Error("This method must be overwritten!");
};
