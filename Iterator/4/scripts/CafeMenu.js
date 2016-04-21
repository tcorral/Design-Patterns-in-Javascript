import Menu from '../../common/Menu';
import MenuItem from '../../common/MenuItem';
import Iterator from '../../common/Iterator';

class CafeMenu extends Menu {
  constructor() {
    super();
    this.addItem("Express", "Coffee from machine", false, 0.99);
    this.addItem("Long with water", "Coffee with a lot of water", false, 1.20);
    this.addItem("On the rocks", "Coffee with ice", false, 2.00);
  }
  createIterator() {
    return new Iterator(this.menuItems);
  }
  addItem(name, description, isVegetarian, price) {
    super.addItem(new MenuItem(name, description, isVegetarian, price));
  }
}

export default CafeMenu;
