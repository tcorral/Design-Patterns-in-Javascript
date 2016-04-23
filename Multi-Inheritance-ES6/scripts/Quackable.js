const Quackable = Sup => class extends Sup {
  quack() {
    console.log('Quack!');
  }
};

export default Quackable;
