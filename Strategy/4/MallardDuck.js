var MallardDuck = function() {
  Duck.apply(this);
  this.oFlyBehavior = new FlyWithWings();
  this.oQuackBehavior = new Quack();
};
MallardDuck.prototype = new Duck();
MallardDuck.prototype.display = function() {
  alert("MallardDuck show");
};
