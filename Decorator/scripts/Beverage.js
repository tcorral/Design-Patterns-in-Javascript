class Beverage {
  constructor(description) {
    this.description = description || 'Unknown beverage';
  }

  getDescription() {
    return this.description;
  }

  cost() {
    throw new Error("This method must be overwritten!");
  }
}

export default Beverage;
