import Iterator from './Iterator';
import Menu from './Menu';

class CompositeIterator extends Iterator {
	constructor(iterator) {
		super();
		this.stack = [iterator];
		this.hasNext = () => {
			let result = false;
			if(this.stack.length !== 0){
				let iterator = this.stack[this.stack.length-1];
				if(iterator.hasNext() === false){
					this.stack.pop();
					result = this.hasNext();
				}else{
					result =true;
				}
			}
			return result;
		};
		this.next = () => {
			let result = null;
			if(this.hasNext()){
				let iterator = this.stack[this.stack.length-1];
				let menuComponent = iterator.next();
				if(menuComponent instanceof Menu){
					this.stack.push(menuComponent.createIterator());
				}
				result = menuComponent;
			}
			return result;
		};
		this.remove = () => {
			throw new Error("We are not supporting remove, just traversal");
		};
	}
}

export default CompositeIterator;
