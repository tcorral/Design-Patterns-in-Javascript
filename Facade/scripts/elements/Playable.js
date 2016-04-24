const Playable = Sup => class extends Sup {
  eject() {
    throw new Error('This method should be overwritten!');
  }

  play() {
    throw new Error('This method should be overwritten!');
  }

  stop() {
    throw new Error('This method should be overwritten!');
  }
};

export default Playable;
