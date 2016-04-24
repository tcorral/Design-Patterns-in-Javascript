import PizzaStore from '../../../common/PizzaStore';
import ChicagoPizzaIngredientFactory from '../ingredientFactory/ChicagoPizzaIngredientFactory';
import CheesePizza from '../pizzas/CheesePizza';
import VeggiePizza from '../pizzas/VeggiePizza';
import ClamPizza from '../pizzas/ClamPizza';
import PepperoniPizza from '../pizzas/PepperoniPizza';

const PIZZAS = {
  cheese: CheesePizza,
  veggie: VeggiePizza,
  clam: ClamPizza,
  pepperoni: PepperoniPizza
};

class ChicagoPizzaStore extends PizzaStore {
  createPizza(type) {
    let ingredientFactory = new ChicagoPizzaIngredientFactory();
    let PizzaConstructor = PIZZAS[type];
    let pizza = null;
    if (PizzaConstructor) {
      pizza = new PizzaConstructor('Chicago Style', ingredientFactory);
    }
    return pizza;
  }
}

export default ChicagoPizzaStore;
