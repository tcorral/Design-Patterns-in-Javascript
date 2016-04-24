class Duck {
  quack() {
    console.log('Quack!');
  }

  swim() {
    console.log('Chop!');
  }

  fly() {
    console.log('Wings!');
  }

  display() {
    throw new Error("This method must be overwritten!");
  }

}

export default Duck;
