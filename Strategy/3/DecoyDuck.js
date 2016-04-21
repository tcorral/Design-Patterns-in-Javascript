var DecoyDuck = function() {
  Duck.apply(this);
};
DecoyDuck.prototype = new Duck();
DecoyDuck.prototype.display = function() {
  alert("DecoyDuck show");
};
