class Pizza {
  constructor({ name = '', dough = '', sauce = '', toppings = []}) {
    this.name = name;
    this.dough = dough;
    this.sauce = sauce;
    this.toppings = toppings;
  }

  prepare() {
    console.log("Preparing " + this.name);
    console.log("Tossing dough...");
    console.log("Adding sauce");
    console.log("Adding toppings:");

    for (let topping of this.toppings) {
      console.log(topping + "  ");
    }
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
}

export default Pizza;
