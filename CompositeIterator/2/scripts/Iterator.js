class Iterator {
  hasNext() {
    throw new Error("This method must be overwritten!");
  }

  next() {
    throw new Error("This method must be overwritten!");
  }

  remove() {
    throw new Error("This method must be overwritten!");
  }
}

export default Iterator;
