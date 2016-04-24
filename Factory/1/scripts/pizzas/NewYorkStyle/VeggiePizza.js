import Pizza from '../../Pizza';

class VeggiePizza extends Pizza {
  constructor() {
    super({
      name: 'NY Style Sauce and Veggie Pizza',
      dough: 'Thin Crust Dough',
      sauce: 'Marinara sauce',
      toppings: ["Grated Reggiano Cheese", 'Paprika', 'Tomato', 'Beans']
    });
  }
}

export default VeggiePizza;
