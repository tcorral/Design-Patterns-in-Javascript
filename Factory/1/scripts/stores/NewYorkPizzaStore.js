import PizzaStore from '../../../common/PizzaStore';
import CheesePizza from '../pizzas/NewYorkStyle/CheesePizza';
import VeggiePizza from '../pizzas/NewYorkStyle/VeggiePizza';
import ClamPizza from '../pizzas/NewYorkStyle/ClamPizza';
import PepperoniPizza from '../pizzas/NewYorkStyle/PepperoniPizza';

const PIZZAS = {
  cheese: CheesePizza,
  veggie: VeggiePizza,
  clam: ClamPizza,
  pepperoni: PepperoniPizza
};

class NewYorkPizzaStore extends PizzaStore {
  createPizza(type) {
    let PizzaConstructor = PIZZAS[type];
    let pizza = null;
    if (PizzaConstructor) {
      pizza = new PizzaConstructor();
    }
    return pizza;
  }
}

export default NewYorkPizzaStore;
