import PizzaIngredientFactory from '../PizzaIngredientFactory';
import ThinCrustDough from '../ingredients/ThinCrustDough';
import MarinaraSauce from '../ingredients/MarinaraSauce';
import ReggianoCheese from '../ingredients/ReggianoCheese';
import Garlic from '../ingredients/Garlic';
import Onion from '../ingredients/Onion';
import Mushroom from '../ingredients/Mushroom';
import RedPepper from '../ingredients/RedPepper';

class ChicagoPizzaIngredientFactory extends PizzaIngredientFactory {
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
    return [new Garlic(), new Onion(), new Mushroom(), new RedPepper()];
  }

  createPepperoni() {}

  createClam() {}
}

export default ChicagoPizzaIngredientFactory;
