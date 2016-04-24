import Pizza from '../Pizza';

class PepperoniPizza extends Pizza {
  constructor(style, ingredientFactory) {
    super({
      name: style + ' Pepperoni Pizza'
    });
    this.ingredientFactory = ingredientFactory;
  }

  prepare() {
    let ingredientFactory = this.ingredientFactory;
    console.log("Preparing " + this.name);
    this.dough = ingredientFactory.createDough();
    this.sauce = ingredientFactory.createSauce();
    this.cheese = ingredientFactory.createCheese();
  }
}

export default PepperoniPizza;
