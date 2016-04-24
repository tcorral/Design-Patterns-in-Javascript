class Chainable {
  constructor() {
    this.number = 0;
  }

  add(number) {
    this.number += number;
    return this;
  }

  multiply(number) {
    this.number *= number;
    return this;
  }

  toString() {
    return this.number.toString();
  }
}

export default Chainable;
