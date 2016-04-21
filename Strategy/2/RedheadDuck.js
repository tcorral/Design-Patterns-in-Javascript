var RedheadDuck = function() {
  Duck.apply(this);
};
RedheadDuck.prototype = new Duck();
RedheadDuck.prototype.display = function() {
  alert("RedheadDuck show");
};
