import Mattress from '../../common/Mattress';

class Mattress2 extends Mattress {
  printVegetarianMenu() {
    let iterator = this.menus.menuComponents[Symbol.iterator]();
    let menu = iterator.next();
    console.log("VEGETARIAN MENU");
    while (menu.value) {
      let menuComponentsIterator = menu.value.menuComponents[Symbol.iterator]();
      let menuComponent = menuComponentsIterator.next();
      while (menuComponent.value) {
        try {
          if (menuComponent.value.isVegetarian()) {
            menuComponent.value.print();
          }
        } catch (error) {}
        menuComponent = menuComponentsIterator.next();
      }
      menu = iterator.next();
    }
  }
}

export default Mattress2;
