function getIndexArray() {
  return this.lastIndex;
}
function getIndexObject() {
  return this.keys[this.lastIndex];
}

function getCurrentArray() {
  return this.array[this.lastIndex];
}

function getCurrentObject() {
  return this.array[this.keys[this.lastIndex]];
}

function nextArray() {
  var result = null;
  if (this.hasNext()) {
    result = this.array[++this.lastIndex];
  }
  return result;
}

function nextObject() {
  var result = null;
  if (this.hasNext()) {
    result = this.array[this.keys[++this.lastIndex]];
  }
  return result;
}

function prevArray() {
  var result = null;
  if (this.hasPrev()) {
    result = this.array[--this.lastIndex];
  }
  return result;
}

function prevObject() {
  var result = null;
  if (this.hasPrev()) {
    result = this.array[this.keys[--this.lastIndex]];
  }
  return result;
}

class ConvertToIterator {
  constructor(object, stopAutoInit) {
    if (object != null) {
      this.lastIndex = -1;
      this.keys = [];
      this.length = 0;
      this.array = object;
      this.isArray = Array.isArray(object);

      if (!stopAutoInit) {
        this.keys = Object.keys(object).sort();
        this.length = this.keys.length;
      }
    }
  }
  getIndex() {
    if (this.isArray) {
      this.getIndex = getIndexArray;
    } else {
      this.getIndex = getIndexObject;
    }
    return this.getIndex(this);
  }
  current() {
    if (this.isArray) {
      this.current = getCurrentArray;
    } else {
      this.current = getCurrentObject;
    }

    return this.current(this);
  }
  hasNext() {
    return (this.lastIndex + 1) < this.length;
  }
  hasPrev() {
    return (this.lastIndex - 1) > -1;
  }
  next() {
    var result = null;
    if (this.length !== 0) {
      if (this.isArray) {
        this.next = nextArray;
      }
      else {
        this.next = nextObject;
      }
      result = this.next(this);
    }
    return result;
  }
  prev() {
    var result = null;
    if (this.length !== 0) {
      if (this.bIsArray) {
        this.prev = prevArray;
      }
      else {
        this.prev = prevObject;
      }
      result = this.prev(this);
    }
    return result;
  }
  movePointerTo(index) {
    if (index > -1 && index < this.length) {
      this.lastIndex = index;
    }
  }
  startPosition() {
    this.movePointerTo(0);
  }
  endPosition() {
    this.movePointerTo(this.length);
  }
  first() {
    this.startPosition();
    return this.current();
  }
  last() {
    this.endPosition();
    return this.current();
  }
}

export default ConvertToIterator;
