class Pizza {
  constructor({ name = '', dough = null, sauce = null, veggies = [], cheese = null, pepperoni = null, clams = null }) {
    this.name = name;
    this.dough = dough;
    this.sauce = sauce;
    this.veggies = veggies;
    this.cheese = cheese;
    this.pepperoni = pepperoni;
    this.clams = clams;
  }

  prepare() {
    throw new Error("This method must be overwritten!");
  }

  bake() {
    console.log("Bake for 25 minutes at 350");
  }

  cut() {
    console.log("Cutting the pizza into diagonal slices");
  }

  box() {
    console.log("Place pizza in official PizzaStore box");
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

export default Pizza;
