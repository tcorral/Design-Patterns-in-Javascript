import Pizza from '../../Pizza';

class CheesePizza extends Pizza {
  constructor() {
    super({
      name: 'NY Style Sauce and Cheese Pizza',
      dough: 'Thin Crust Dough',
      sauce: 'Marinara sauce',
      toppings: ["Grated Reggiano Cheese"]
    });
  }
}

export default CheesePizza;
