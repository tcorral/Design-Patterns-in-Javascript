var FlyWithWings = function() {
  FlyBehavior.apply(this);
};
FlyWithWings.prototype = new FlyBehavior();
FlyWithWings.prototype.fly = function() {
  alert("Flap!Flap!");
};
