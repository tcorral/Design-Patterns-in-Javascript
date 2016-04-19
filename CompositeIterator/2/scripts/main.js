import Menu from './Menu';
import MenuItem from './MenuItem';
import Mattress from './Mattress';

let panCakeHouseMenu = new Menu("Pancake House Menu", "Breakfast");
let dinnerMenu = new Menu("Dinner Menu", "Lunch");
let coffeeMenu = new Menu("Cafe Menu", "Dinner");
let allMenus = new Menu("ALL MENUS", "All menus combined");

allMenus.add(panCakeHouseMenu);
allMenus.add(dinnerMenu);

dinnerMenu.add(new MenuItem("Pasta",
  "Spaghetti with Marinara Sauce, and a slice of sourdough bread",
  true,
  3.89));
dinnerMenu.add(coffeeMenu);

coffeeMenu.add(new MenuItem("Express", "Coffee from machine", false, 0.99));

let mattress = new Mattress(allMenus);
console.log("---------------------------------------------");
mattress.printVegetarianMenu();
console.log("---------------------------------------------");
