import BasicPizza from './BasicPizza';

class PepperoniPizza extends BasicPizza {
  constructor() {
    super({
      name: 'Chicago Style Deep Dish Pepperoni Pizza',
      dough: 'Extra Thin Crust Dough',
      sauce: 'Plum Tomato Sauce',
      toppings: ["Shredded Mozzarella Cheese", 'Pepperoni']
    })
  }
}

export default PepperoniPizza;
