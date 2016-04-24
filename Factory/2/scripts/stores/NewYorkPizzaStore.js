import PizzaStore from '../../../common/PizzaStore';
import NewYorkPizzaIngredientFactory from '../ingredientFactory/NewYorkPizzaIngredientFactory';
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

class NewYorkPizzaStore extends PizzaStore {
  createPizza(type) {
    let ingredientFactory = new NewYorkPizzaIngredientFactory();
    let PizzaConstructor = PIZZAS[type];
    let pizza = null;
    if (PizzaConstructor) {
      pizza = new PizzaConstructor('New York Style', ingredientFactory);
    }
    return pizza;
  }
}

export default NewYorkPizzaStore;
