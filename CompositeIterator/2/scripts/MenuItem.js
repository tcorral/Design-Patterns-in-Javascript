import MenuComponent from './MenuComponent';
import NullIterator from './NullIterator';

class MenuItem extends MenuComponent {
  constructor(name, description, isVegetarian, price) {
    super();
    this.name = name;
    this.description = description;
    this._isVegetarian = isVegetarian;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getPrice() {
    return this.price;
  }

  isVegetarian() {
    return this._isVegetarian;
  }

  print() {
    debugger;
    console.log(this.getName() + ": " + this.getDescription() + ", " + this.getPrice() + "euros");
  }

  createIterator() {
    return new NullIterator();
  }
}

export default MenuItem;
