class Menu {
  constructor() {
    this.menuItems = [];
    this.length = 0;
  }

  addItem(menuItem) {
    this.menuItems.push(menuItem);
    this.length++;
  }

  getMenuItems() {
    return this.menuItems;
  }
}


export default Menu;
