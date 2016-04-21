import PancakeHouseMenu from './PancakeHouseMenu';
import DinnerMenu from './DinnerMenu';

class Mattress {
  constructor() {
    this.breakfastItems = new PancakeHouseMenu().getMenuItems();
    this.lunchItems = new DinnerMenu().getMenuItems();
  }

  printBreakfastMenu() {
    this.breakfastItems.forEach(item => {
      console.log(item.getName() + ": " + item.getDescription() + ", " + item.getPrice() + "eur.");
    });
  }

  printLunchMenu() {
    this.lunchItems.forEach(item => {
      console.log(item.getName() + ": " + item.getDescription() + ", " + item.getPrice() + "eur.");
    });
  }

  printMenu() {
    this.printBreakfastMenu();
    this.printLunchMenu();
  }

  isItemVegetarian(name) {

    this.breakfastItems.forEach(function(item) {
      if (item.getName() === name) {
        return item.isVegetarian();
      }
    });
    this.lunchItems.forEach(function(item) {
      if (item.getName() === name) {
        return item.isVegetarian();
      }
    });

    throw new Error("Sorry, but we don't have this in our menu!");
  }
}

export default Mattress;
