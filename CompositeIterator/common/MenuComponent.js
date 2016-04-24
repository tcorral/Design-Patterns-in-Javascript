class MenuComponent {
  constructor(name, description, isVegetarian, price) {
    this.name = name;
    this.description = description;
    this._isVegetarian = isVegetarian;
    this.price = price;
  }

  isVegetarian() {
    return !!this._isVegetarian;
  }

  getName() {
    throw new Error("This method must be overwritten!");
  }

  getDescription() {
    throw new Error("This method must be overwritten!");
  }

  getPrice() {
    throw new Error("This method must be overwritten!");
  }

  print() {
    throw new Error("This method must be overwritten!");
  }

  add() {
    throw new Error("This method must be overwritten!");
  }

  remove() {
    throw new Error("This method must be overwritten!");
  }

  getChild() {
    throw new Error("This method must be overwritten!");
  }

  createIterator() {
    throw new Error("This method must be overwritten!");
  }
}

export default MenuComponent;
