import PancakeHouseMenu from './PancakeHouseMenu';
import LunchMenu from './LunchMenu';

function processArray(array, callback) {
  for (let item of array) {
    if (!callback(item)) {
      break;
    }
  }
}

function printEachMenu(array) {
  processArray(array, function(item) {
    console.log(item.getName() + ": " + item.getDescription() + ", " + item.getPrice() + "eur.");
  });
}

function printEachVegetarianMenu(array, name) {
  processArray(array, function(item) {
    if (item.getName() === name) {
      return item.isVegetarian();
    }
  });
}

class Mattress {
  constructor() {
    this.breakfastItems = new PancakeHouseMenu().getMenuItems();
    this.lunchItems = new LunchMenu().getMenuItems();
  }

  printBreakfastMenu() {
    printEachMenu(this.breakfastItems);
  }

  printLunchMenu() {
    printEachMenu(this.lunchItems);
  }

  printMenu() {
    this.printBreakfastMenu();
    this.printLunchMenu();
  }

  isItemVegetarian(name) {
    printEachVegetarianMenu(this.breakfastItems, name);
    printEachVegetarianMenu(this.lunchItems, name);

    throw new Error("Sorry, but we don't have this in our menu!");
  }
}

export default Mattress;
