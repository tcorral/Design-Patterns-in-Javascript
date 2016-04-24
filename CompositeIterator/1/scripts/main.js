import Menu from '../../common/Menu';
import MenuItem from '../../common/MenuItem';
import Mattress from '../../common/Mattress';

var oPanCakeHouseMenu = new Menu("Pancake House Menu", "Breakfast");
var oLunchMenu = new Menu("Dinner Menu", "Lunch");
var oCoffeeMenu = new Menu("Cafe Menu", "Lunch");
var oAllMenus = new Menu("ALL MENUS", "All menus combined");

oAllMenus.add(oPanCakeHouseMenu);
oAllMenus.add(oLunchMenu);

oLunchMenu.add(new MenuItem("Pasta",
  "Spaghetti with Marinara Sauce, and a slice of sourdough bread",
  true,
  3.89));
oLunchMenu.add(oCoffeeMenu);

oCoffeeMenu.add(new MenuItem("Express", "Coffee from machine", false, 0.99));

var oMattress = new Mattress(oAllMenus);
console.log("---------------------------------------------");
oMattress.printMenu();
console.log("---------------------------------------------");
