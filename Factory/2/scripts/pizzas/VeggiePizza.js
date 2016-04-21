import Pizza from '../Pizza';

class VeggiePizza extends Pizza {
  constructor(style, ingredientFactory) {
    super({
      name: style + ' Veggie Pizza'
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

export default VeggiePizza;
