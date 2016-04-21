import Pizza from '../../Pizza';

class PepperoniPizza extends Pizza {
  constructor() {
    super({
      name: 'NY Style Sauce and Pepperoni Pizza',
      dough: 'Thin Crust Dough',
      sauce: 'Marinara sauce',
      toppings: ["Grated Reggiano Cheese", 'Pepperoni']
    });
  }
}

export default PepperoniPizza;
