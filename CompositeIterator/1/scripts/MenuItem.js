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
    return this.sName;
  }
  getDescription() {
    return this.sDescription;
  }
  getPrice() {
    return this.nPrice;
  }
  isVegetarian() {
    return this.bVegetarian;
  }
  print() {
    console.log(this.getName() + ": " + this.getDescription() + ", " + this.getPrice() + "euros");
  }
  createIterator() {
    return new NullIterator();
  }
}

export default MenuItem;
