function printMenu(iterator) {
  let menuItem = iterator.next();
  while(menuItem.value) {
    console.log(menuItem.value.getName() + ": " + menuItem.value.getDescription() + ", " + menuItem.value.getPrice() + "eur.");
    menuItem = iterator.next();
  }
}

class Mattress {
  constructor(menus) {
    this.pancakeHouseMenu = menus.pancakeHouseMenu;
    this.lunchMenu = menus.lunchMenu;
  }
  printMenu() {
    this.printBreakfastMenu();
    this.printLunchMenu();
  }
  printBreakfastMenu() {
    var iteratorPancakeHouseMenu = this.pancakeHouseMenu.createIterator();
    console.log("Breakfast");
    printMenu(iteratorPancakeHouseMenu);
  }
  printLunchMenu() {
    var iteratorLunchMenu = this.lunchMenu.createIterator();
    console.log("Lunch");
    printMenu(iteratorLunchMenu);
  }
  isItemVegetarian(name) {
    var iteratorPancakeHouseMenu = this.pancakeHouseMenu.createIterator();
    var iteratorLunchMenu = this.lunchMenu.createIterator();
    let menuItem = iteratorPancakeHouseMenu.next();

    while(menuItem.value) {
      menuItem = iteratorPancakeHouseMenu.next();
      if(menuItem.value.name === name) {
        return menuItem.value.isVegetarian();
      }
    }

    menuItem = iteratorLunchMenu.next();

    while(menuItem.value) {
      if(menuItem.value.name === name) {
        return menuItem.value.isVegetarian();
      }
      menuItem = iteratorLunchMenu.next();
    }

    throw new Error("Sorry, but we don't have this in our menu!");
  }
}

export default Mattress;
