import Iterator from './Iterator';
import Menu from './Menu';

class CompositeIterator extends Iterator {
  constructor(iterator) {
    super();
    this.stack = [iterator];
  }

  hasNext() {
    var oIterator = null;
    if(this.stack.length === 0){
      return false;
    }else {
      oIterator = this.stack[this.stack.length-1];
      if(oIterator.hasNext() === false){
        this.stack.pop();
        return this.hasNext();
      }else{
        return true;
      }
    }
  }

  next() {
    var oIterator = null;
    var oMenuComponent = null;
    if(this.hasNext()){
      oIterator = this.stack[this.stack.length-1];
      oMenuComponent = oIterator.next();
      if(oMenuComponent instanceof Menu){
        this.stack.push(oMenuComponent.createIterator());
      }
      return oMenuComponent;
    }else{
      return null;
    }
  }

  remove() {
    throw new Error("We are not supporting remove, just traversal");
  }
}

export default CompositeIterator;
