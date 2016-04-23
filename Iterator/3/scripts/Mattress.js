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
    this.dinnerMenu = menus.dinnerMenu;
  }
  printMenu() {
    this.printBreakfastMenu();
    this.printDinnerMenu();
  }
  printBreakfastMenu() {
    var iteratorPancakeHouseMenu = this.pancakeHouseMenu.createIterator();
    console.log("Breakfast");
    printMenu(iteratorPancakeHouseMenu);
  }
  printDinnerMenu() {
    var iteratorDinnerMenu = this.dinnerMenu.createIterator();
    console.log("Dinner");
    printMenu(iteratorDinnerMenu);
  }
  isItemVegetarian(name) {
    var iteratorPancakeHouseMenu = this.pancakeHouseMenu.createIterator();
    var iteratorDinnerMenu = this.dinnerMenu.createIterator();
    let menuItem = iteratorPancakeHouseMenu.next();

    while(menuItem.value) {
      menuItem = iteratorPancakeHouseMenu.next();
      if(menuItem.value.name === name) {
        return menuItem.value.isVegetarian();
      }
    }

    menuItem = iteratorDinnerMenu.next();

    while(menuItem.value) {
      if(menuItem.value.name === name) {
        return menuItem.value.isVegetarian();
      }
      menuItem = iteratorDinnerMenu.next();
    }

    throw new Error("Sorry, but we don't have this in our menu!");
  }
}

export default Mattress;
