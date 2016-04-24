import Menu from '../../common/Menu';
import MenuItem from '../../common/MenuItem';
import Mattress from './Mattress';

let panCakeHouseMenu = new Menu("Pancake House Menu", "Breakfast");
let lunchMenu = new Menu("Dinner Menu", "Lunch");
let coffeeMenu = new Menu("Cafe Menu", "Lunch");
let allMenus = new Menu("ALL MENUS", "All menus combined");

allMenus.add(panCakeHouseMenu);
allMenus.add(lunchMenu);

lunchMenu.add(new MenuItem("Pasta",
  "Spaghetti with Marinara Sauce, and a slice of sourdough bread",
  true,
  3.89));
lunchMenu.add(coffeeMenu);


coffeeMenu.add(new MenuItem("Express", "Coffee from machine", false, 0.99));

let mattress = new Mattress(allMenus);
console.log("---------------------------------------------");
mattress.printVegetarianMenu();
console.log("---------------------------------------------");
