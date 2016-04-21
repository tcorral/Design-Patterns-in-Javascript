var Subject = function() {
  this.registerObserver = function() {
    throw new Error("This method must be overwritten!");
  };
  this.removeObserver = function() {
    throw new Error("This method must be overwritten!");
  };
  this.notifyObservers = function() {
    throw new Error("This method must be overwritten!");
  };
};
