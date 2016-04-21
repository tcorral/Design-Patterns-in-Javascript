import Pizza from '../../Pizza';

class ClamPizza extends Pizza {
  constructor() {
    super({
      name: 'NY Style Sauce and Clam Pizza',
      dough: 'Thin Crust Dough',
      sauce: 'Marinara sauce',
      toppings: ["Grated Reggiano Cheese", 'Clams']
    });
  }
}

export default ClamPizza;
