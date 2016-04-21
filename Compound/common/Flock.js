import Quackable from './Quackable';
import ConvertToIterator from '../../common/ConvertToIterator';

class Flock extends Quackable {
	constructor() {
		super();
		this.quackers = [];
	}
	quack() {
		let iterator = new ConvertToIterator(this.quackers);
		debugger;
		while(iterator.hasNext()) {
			let quacker = iterator.next();
			quacker.quack();
		}
	}
	add(quackable) {
		this.quackers.push(quackable);
	}
}

export default Flock;
