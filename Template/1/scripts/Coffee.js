import CaffeineBeverage from './CaffeineBeverage';

class Coffee extends CaffeineBeverage {
  brew() {
    console.log("Dripping Coffee through filter!");
  }

  addCondiments() {
    console.log("Add Sugar and Milk!");
  }

  customerWantsCondiments() {
    return confirm("Do you want sugar and milk?");
  }
}

export default Coffee;
