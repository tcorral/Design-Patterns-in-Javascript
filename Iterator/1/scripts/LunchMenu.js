import Menu from './Menu';
import MenuItem from './MenuItem';
const MAX_ITEMS = 6;

class LunchMenu extends Menu {
  constructor() {
    super();
    this.addItem("Vegetarian BLT", "(Fakin') Bacon with lettuce and tomato on whole wheat", true, 2.99);
    this.addItem("BLT", "Bacon with lettuce and tomato on whole wheat", false, 2.99);
    this.addItem("Soup of the day", "Soup of the day, with a side of potato salad", false, 3.29);
    this.addItem("Hotdog", "A hotdog with saurkraut, relish, onions, topped with cheese", false, 3.05);
  }

  addItem(name, description, isVegetarian, price) {
    if (this.length === MAX_ITEMS) {
      throw new Error("Sorry menu is full! Can't add item to menu");
    }
    super.addItem(new MenuItem({
      name: name,
      description: description,
      isVegetarian: isVegetarian,
      price: price
    }));
  }
}

export default LunchMenu;
