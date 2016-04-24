import BasicPizza from './BasicPizza';

class CheesePizza extends BasicPizza {
  constructor() {
    super({
      name: 'Chicago Style Deep Dish Cheese Pizza',
      dough: 'Extra Thin Crust Dough',
      sauce: 'Plum Tomato Sauce',
      toppings: ["Shredded Mozzarella Cheese"]
    })
  }
}

export default CheesePizza;
