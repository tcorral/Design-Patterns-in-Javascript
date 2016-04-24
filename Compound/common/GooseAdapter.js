class GooseAdapter {
  constructor(oGoose) {
    this.oGoose = oGoose;
  }

  quack() {
    this.oGoose.honk();
  }
}

export default GooseAdapter;
