import MenuComponent from './MenuComponent';

class Menu extends MenuComponent {
  constructor(name, description) {
    super();
    this.iterator = null;
    this.menuComponents = [];
    this.name = name;
    this.description = description;
  }

  add(menuComponent) {
    this.menuComponents.push(menuComponent);
  }

  remove(menuComponent) {
    this.menuComponents = this.menuComponents.filter(component => {
      return component !== menuComponent;
    });
  }

  getChild(index) {
    return this.menuComponents[index];
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  print() {
    console.log(this.getName() + ": " + this.getDescription());
    console.log("--------------------------------------------");

    for(let component of this.menuComponents) {
      component.print();
    }
  }

  createIterator() {
    if (this.iterator === null) {
      this.iterator = this.menuComponents[Symbol.iterator]();
    }
    return this.iterator;
  };
}

export default Menu;
