import BasicPizza from './BasicPizza';

class VeggiePizza extends BasicPizza {
  constructor() {
    super({
      name: 'Chicago Style Deep Dish Veggie Pizza',
      dough: 'Extra Thin Crust Dough',
      sauce: 'Plum Tomato Sauce',
      toppings: ["Shredded Mozzarella Cheese", 'Paprika', 'Tomato', 'Beans']
    })
  }
}

export default VeggiePizza;
