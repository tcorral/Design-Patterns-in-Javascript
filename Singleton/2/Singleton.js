var Singleton = function() {
  if (Singleton.instance == null) {
    Singleton.instance = this;
  }
  return Singleton.instance;
};
Singleton.prototype.toString = function() {
  return "[object Singleton]";
};
Singleton.getInstance = function() {
  return new Singleton();
};
