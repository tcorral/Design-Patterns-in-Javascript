class State {
  download() {
    throw new Error("This method must be overwritten!");
  }

  pause() {
    throw new Error("This method must be overwritten!");
  }

  fail() {
    throw new Error("This method must be overwritten!");
  }

  finish() {
    throw new Error("This method must be overwritten!");
  }

}

export default State;
