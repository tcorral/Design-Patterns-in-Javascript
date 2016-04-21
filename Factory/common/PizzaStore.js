class PizzaStore {
  createPizza() {
    throw new Error("This method must be overwritten!");
  }

  orderPizza(type) {
    let pizza = this.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
  }
}

export default PizzaStore;
