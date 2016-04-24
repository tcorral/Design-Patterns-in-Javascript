import Pizza from '../Pizza';

class CheesePizza extends Pizza {
  constructor(style, ingredientFactory) {
    super({
      name: style + ' Cheese Pizza'
    });
    console.log(this.name);
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

export default CheesePizza;
