import Menu from './Menu';
import MenuItem from './MenuItem';
import Mattress from './Mattress';

let oPanCakeHouseMenu = new Menu("Pancake House Menu", "Breakfast");
let oDinnerMenu = new Menu("Dinner Menu", "Lunch");
let oCoffeeMenu = new Menu("Cafe Menu", "Dinner");
let oAllMenus = new Menu("ALL MENUS", "All menus combined");

oAllMenus.add(oPanCakeHouseMenu);
oAllMenus.add(oDinnerMenu);

oDinnerMenu.add(new MenuItem("Pasta", "Spaghetti with Marinara Sauce, and a slice of sourdough bread", true, 3.89));
oDinnerMenu.add(oCoffeeMenu);

oCoffeeMenu.add(new MenuItem("Express", "Coffee from machine", false, 0.99));

let oMattress = new Mattress(oAllMenus);
console.log("---------------------------------------------");
oMattress.printMenu();
console.log("---------------------------------------------");
