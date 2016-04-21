import Mattress from './Mattress';
import PancakeHouseMenu from './PancakeHouseMenu';
import DinnerMenu from './DinnerMenu';

var oMattress = new Mattress({
  pancakeHouseMenu: new PancakeHouseMenu(),
  dinnerMenu: new DinnerMenu()
});
console.log("---------------------------------------------");
oMattress.printMenu();
console.log("---------------------------------------------");
oMattress.printBreakfastMenu();
console.log("---------------------------------------------");
oMattress.printDinnerMenu();
