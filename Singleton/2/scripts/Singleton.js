let instance = null;

class Singleton {
  static get instance() {
    return instance;
  }

  static set instance(_instance) {
    instance = _instance;
  }

  constructor() {
    if (Singleton.instance === null) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }

  toString() {
    return "[object Singleton]";
  }

  getInstance() {
    return new Singleton();
  }
}

export default Singleton;
