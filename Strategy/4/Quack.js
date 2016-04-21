var Quack = function() {
  QuackBehavior.apply(this);
};
Quack.prototype = new QuackBehavior();
Quack.prototype.quack = function() {
  alert("Quack!");
};
