class Duck {
  constructor() {
    this.flyBehavior = null;
    this.quackBehavior = null;
  }

  setFlyBehavior(flyBehavior) {
    this.flyBehavior = flyBehavior;
  }

  setQuackBehavior(quackBehavior) {
    this.quackBehavior = quackBehavior;
  }

  fly() {
    this.flyBehavior.fly();
  }

  quack() {
    this.quackBehavior.quack();
  }

  swim() {
    console.log('Chop!');
  }

  display() {
    throw new Error("This method must be overwritten!");
  }
}

export default Duck;
