import PizzaStore from '../../../common/PizzaStore';
import CheesePizza from '../pizzas/ChicagoStyle/CheesePizza';
import VeggiePizza from '../pizzas/ChicagoStyle/VeggiePizza';
import ClamPizza from '../pizzas/ChicagoStyle/ClamPizza';
import PepperoniPizza from '../pizzas/ChicagoStyle/PepperoniPizza';

const PIZZAS = {
  cheese: CheesePizza,
  veggie: VeggiePizza,
  clam: ClamPizza,
  pepperoni: PepperoniPizza
};

class ChicagoPizzaStore extends PizzaStore {
  createPizza(type) {
    let PizzaConstructor = PIZZAS[type];
    let pizza = null;
    if (PizzaConstructor) {
      pizza = new PizzaConstructor();
    }
    return pizza;
  }
}

export default ChicagoPizzaStore;
