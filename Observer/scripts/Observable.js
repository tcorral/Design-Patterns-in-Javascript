const Observable = Sup => class extends Sup {
  update() {
    throw new Error("This method must be overwritten!");
  };
};

export default Observable;
