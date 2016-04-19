import MenuComponent from './MenuComponent';
import CompositeIterator from './CompositeIterator';
import ConvertToIterator from './ConvertToIterator';

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
      return menuComponent !== component;
    });
  }

  getChild(index) {
    return this.menuComponents[index];
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.sDescription;
  }

  print() {
    console.log(this.getName() + ": " + this.getDescription());
    console.log("--------------------------------------------");

    this.menuComponents.forEach(component => {
      component.print();
    });
  }

  createIterator() {
    if (this.iterator === null) {
      this.iterator = new CompositeIterator(new ConvertToIterator(this.menuComponents));
    }
    return this.iterator;
  }
}

export default Menu;
