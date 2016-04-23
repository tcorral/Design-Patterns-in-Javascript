class Iterator {
  constructor(menuItems) {
    this.iterator = menuItems[Symbol.iterator]();
    this.keys = Object.keys(menuItems);
    this.length = this.keys.length;
  }

  next() {
    return this.iterator.next();
  }

  remove(key) {
    delete this.menuItems[key];
    this.keys = Object.keys(this.menuItems);
    this.length = this.keys.length;
  }
}

export default Iterator;
