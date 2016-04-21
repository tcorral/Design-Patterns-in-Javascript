var RubberDuck = function() {
  Duck.apply(this);
};
RubberDuck.prototype = new Duck();
RubberDuck.prototype.display = function() {
  alert("RubberDuck show");
};
RubberDuck.prototype.quack = function() {
  alert("Squeak");
};
RubberDuck.prototype.fly = function() {
  // Don't do anything.
};
