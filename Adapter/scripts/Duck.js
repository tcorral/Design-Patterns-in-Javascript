class Duck {
  constructor() {}

  fly() {
    throw new Error('This method must be overwritten!');
  }

  quack() {
    throw new Error('This method must be overwritten!');
  }
}

export default Duck;
