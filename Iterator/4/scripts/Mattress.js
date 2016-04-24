function printMenu(iterator) {
  let menuItem = iterator.next();
  while(menuItem.value) {
    console.log(menuItem.value.getName() + ": "  + menuItem.value.getDescription() + ", " + menuItem.value.getPrice() + "eur.");
    menuItem = iterator.next();
  }
}

class Mattress {
  constructor(menus) {
    this.menus = menus;
  }
  printMenu() {
    this.menus.forEach(function (menu) {
      let iterator = menu.createIterator();
      printMenu(iterator);
    });
  }
}

export default Mattress;
