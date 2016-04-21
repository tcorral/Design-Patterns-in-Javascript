import MenuComponent from './MenuComponent';

class Menu extends MenuComponent {
  constructor(name, description) {
    super();
    this.menuComponents = [];
    this.name = name;
    this.description = description;
    this.createIterator = function() {
      throw new Error('This method must be overwritten!');
    }
  }

  add(menuComponent) {
    this.menuComponents.push(menuComponent);
  }

  remove(menuComponent) {
    this.menuComponents = this.menuComponents.filter(component => {
      return component !== component;
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
    this.menuComponents.forEach(component => {
      component.print();
    });
  }
}

export default Menu;
