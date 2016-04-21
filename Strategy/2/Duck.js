var Duck = function() {

};
Duck.prototype.quack = function() {
  alert("Quack");
};
Duck.prototype.fly = function() {
  alert("Wings");
};
Duck.prototype.swim = function() {
  alert("Chop!");
};
Duck.prototype.display = function() {
  throw new Error("This method must be overwritten!");
};
