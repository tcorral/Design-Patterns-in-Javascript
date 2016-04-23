import MenuComponent from './MenuComponent';

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
    var arr = [];
    return arr[Symbol.iterator]();
  }
}

export default MenuItem;
