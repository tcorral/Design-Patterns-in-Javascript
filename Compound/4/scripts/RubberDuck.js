var RubberDuck = function() {
  Quackable.apply(this);
  this.quack = function() {
    console.log("Squeak!");
  };
};
