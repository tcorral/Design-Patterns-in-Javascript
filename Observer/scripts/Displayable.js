const Displayable = Sup => class extends Sup {
  display() {
    throw new Error('This method should be overwritten!');
  }
};

export default Displayable;
