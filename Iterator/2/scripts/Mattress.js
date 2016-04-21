function printMenu(iterator) {
  while(iterator.hasNext()) {
    let menuItem = iterator.next();
    console.log(menuItem.getName() + ": " + menuItem.getDescription() + ", " + menuItem.getPrice() + "eur.");
  }
}
class Mattress {
  constructor(menus) {
    this.pancakeHouseMenu = menus.pancakeHouseMenu;
    this.dinnerMenu = menus.dinnerMenu;
  }

  printMenu() {
    this.printBreakfastMenu();
    this.printDinnerMenu()
  }
  printBreakfastMenu() {
    let iteratorPancakeHouseMenu = this.pancakeHouseMenu.createIterator();
    console.log('Breakfast');
    printMenu(iteratorPancakeHouseMenu);
  }
  printDinnerMenu() {
    let iteratorDinnerMenu = this.dinnerMenu.createIterator();
    console.log('Dinner');
    printMenu(iteratorDinnerMenu);
  }
  isItemVegearian(name) {
    let iteratorPancakeHouseMenu = this.pancakeHouseMenu.createIterator();
    let iteratorDinnerMenu = this.dinnerMenu.createIterator();

    while(iteratorPancakeHouseMenu.hasNext()) {
      let menuItem = iteratorPancakeHouseMenu.next();
      if(menuItem.name === name) {
        return menuItem.isVegetarian();
      }
    }

    while(iteratorDinnerMenu.hasNext()) {
      let menuItem = iteratorDinnerMenu.next();
      if(menuItem.name === name) {
        return menuItem.isVegetarian();
      }
    }
    throw new Error("Sorry, but we don't have this in our menu!");
  }
}

export default Mattress;
