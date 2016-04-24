class Duck {
  swim() {
    console.log('Chop!');
  }
  display() {
    throw new Error("This method must be overwritten!");
  }
}

export default Duck;
