function modifyPositionOnRemove(instance) {
  if (instance.position >= this.length) {
    this.position = this.length - 1;
  }
}

class Iterator {
  constructor(menuItems) {
    this.menuItems = menuItems;
    this.position = -1;
    this.keys = Object.keys(menuItems);
    this.length = this.keys.length;
  }

  hasNext() {
    return (this.position + 1) < this.length;
  }
  next() {
    this.position++;
    return this.menuItems[this.keys[this.position]];
  }

  remove(key) {
    if (this.position === -1) {
      throw new Error("You can't remove an item until you've done at least one next()!");
    }
    delete this.menuItems[key];
    this.keys = Object.keys(menuItems);
    this.length = this.keys.length;
    modifyPositionOnRemove(this);
  }
};

export default Iterator;
