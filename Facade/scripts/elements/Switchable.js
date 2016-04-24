const Switchable = Sup => class extends Sup {
  on() {
    throw new Error('This method should be overwritten!');
  }

  off() {
    throw new Error('This method should be overwritten!');
  }
};

export default Switchable;
