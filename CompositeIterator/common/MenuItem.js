import MenuComponent from './MenuComponent';
import NullIterator from './NullIterator';

class MenuItem extends MenuComponent {
  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getPrice() {
    return this.price;
  }

  print() {
    console.log(this.getName() + ": " + this.getDescription() + ", " + this.getPrice() + "euros");
  }

  createIterator() {
    return new NullIterator();
  }
}

export default MenuItem;
