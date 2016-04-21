import Pizza from '../Pizza';

class ClamPizza extends Pizza {
  constructor(style, ingredientFactory) {
    super({
      name: style + ' Clams Pizza'
    });
    this.ingredientFactory = ingredientFactory;
  }

  prepare() {
    let ingredientFactory = this.ingredientFactory;
    console.log("Preparing " + this.name);
    this.dough = ingredientFactory.createDough();
    this.sauce = ingredientFactory.createSauce();
    this.cheese = ingredientFactory.createCheese();
    this.clams = ingredientFactory.createClam();
  }
}

export default ClamPizza;
