class PizzaIngredientFactory {
  createDough() {
    throw new Error("This method must be overwritten!");
  }

  createSauce() {
    throw new Error("This method must be overwritten!");
  }

  createCheese() {
    throw new Error("This method must be overwritten!");
  }

  createVeggies() {
    throw new Error("This method must be overwritten!");
  }

  createPepperoni() {
    throw new Error("This method must be overwritten!");
  }

  createClam() {
    throw new Error("This method must be overwritten!");
  }
}

export default PizzaIngredientFactory;
