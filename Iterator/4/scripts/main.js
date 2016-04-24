import Mattress from './Mattress';
import PancakeHouseMenu from './PancakeHouseMenu';
import LunchMenu from './LunchMenu';
import CafeMenu from './CafeMenu';

var oMattress = new Mattress([new PancakeHouseMenu(), new LunchMenu(), new CafeMenu()]);
console.log("---------------------------------------------");
oMattress.printMenu();
console.log("---------------------------------------------");
