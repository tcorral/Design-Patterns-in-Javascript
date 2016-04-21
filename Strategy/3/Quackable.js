var Quackable = function(fpCallback) {
  this.quack = function() {
    fpCallback();
  };
};
