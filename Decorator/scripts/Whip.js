import CondimentDecorator from './CondimentDecorator';

class Whip extends CondimentDecorator {
  constructor(beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription() {
    return this.beverage.getDescription() + ', Whip';
  }

  cost() {
    return 0.60 + this.beverage.cost();
  }
}

export default Whip;
