var MallardDuck = function() {
  Duck.apply(this);
  Quackable.call(this, function() {
    alert("Quack");
  });
  Flyable.call(this, function() {
    alert("Fly");
  });
};
MallardDuck.prototype = new Duck();
MallardDuck.prototype.display = function() {
  alert("MallardDuck show");
};
