import Mattress from './Mattress';
import PancakeHouseMenu from './PancakeHouseMenu';
import LunchMenu from './LunchMenu';

var oMattress = new Mattress({
  pancakeHouseMenu: new PancakeHouseMenu(),
  lunchMenu: new LunchMenu()
});
console.log("---------------------------------------------");
oMattress.printMenu();
console.log("---------------------------------------------");
oMattress.printBreakfastMenu();
console.log("---------------------------------------------");
oMattress.printLunchMenu();
