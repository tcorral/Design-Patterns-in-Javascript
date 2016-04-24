export default function Singleton(instance) {
  if (!Singleton.getInstance) {
    Singleton.getInstance = function() {
      return instance;
    };
    instance = new Singleton;
  }
  this.toString = function() {
    return "[object Singleton]";
  };
}(new Singleton);
