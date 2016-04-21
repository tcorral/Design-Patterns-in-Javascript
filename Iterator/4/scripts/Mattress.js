function printMenu(iterator) {
  while(iterator.hasNext()) {
    let menuItem = iterator.next();
    console.log(menuItem.getName() + ": " + menuItem.getDescription() + ", " + menuItem.getPrice() + "eur.");
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
