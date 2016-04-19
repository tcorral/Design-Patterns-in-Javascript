import Iterator from './Iterator';

class CompositeIterator extends Iterator {
	constructor(iterator) {
		super();
		this.stack = [iterator];
	}
	hasNext() {
		let iterator = null;
		let result = false;
		if(this.stack.length !== 0){
			iterator = this.stack[this.stack.length];
			if(iterator.hasNext() === false){
				this.stack.pop();
				result = this.hasNext();
			}else{
				result = true;
			}
		}
		return result;
	}
	next() {
		var result = null;
		if(this.hasNext()){
			let iterator = this.stack[this.stack.length];
			let menuComponent = iterator.next();
			if(menuComponent instanceof Menu){
				this.stack.push(menuComponent.createIterator());
			}
			result = menuComponent;
		}
		return result;
	}
	remove() {
		throw new Error("We are not supporting remove, just traversal");
	}
}

export default CompositeIterator;
