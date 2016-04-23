import CaffeineBeverage from './CaffeineBeverage';

class Coffee extends CaffeineBeverage {
  brew() {
    console.log("Dripping Coffee through filter!");
  }

  addCondiments() {
    console.log("Add Sugar and Milk!");
  }
}

export default Coffee;
