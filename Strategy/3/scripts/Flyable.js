const Flyable = Sup => class extends Sup {
  fly() {
    console.log('Wings!');
  }
};

export default Flyable;
