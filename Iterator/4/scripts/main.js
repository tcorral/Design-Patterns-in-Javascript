import Mattress from './Mattress';
import PancakeHouseMenu from './PancakeHouseMenu';
import DinnerMenu from './DinnerMenu';
import CafeMenu from './CafeMenu';

var oMattress = new Mattress([new PancakeHouseMenu(), new DinnerMenu(), new CafeMenu()]);
console.log("---------------------------------------------");
oMattress.printMenu();
console.log("---------------------------------------------");
