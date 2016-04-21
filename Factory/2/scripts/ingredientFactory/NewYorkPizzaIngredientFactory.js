import PizzaIngredientFactory from '../PizzaIngredientFactory';
import ThinCrustDough from '../ingredients/ThinCrustDough';
import MarinaraSauce from '../ingredients/MarinaraSauce';
import ReggianoCheese from '../ingredients/ReggianoCheese';
import Garlic from '../ingredients/Garlic';
import Mushroom from '../ingredients/Mushroom';
import RedPepper from '../ingredients/RedPepper';

class NewYorkPizzaIngredientFactory extends PizzaIngredientFactory {
  createDough() {
    return new ThinCrustDough();
  }

  createSauce() {
    return new MarinaraSauce();
  }

  createCheese() {
    return new ReggianoCheese();
  }

  createVeggies() {
    return [new Garlic(), new Mushroom(), new RedPepper()];
  }

  createPepperoni() {}

  createClam() {}
}

export default NewYorkPizzaIngredientFactory;
