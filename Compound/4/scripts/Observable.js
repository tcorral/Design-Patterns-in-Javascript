import QuackObservable from './QuackObservable';
import ConvertToIterator from '../../../common/ConvertToIterator';

class Observable extends QuackObservable {
	constructor(duck) {
		super();
		this.observers = [];
		this.duck = duck;
	}
	registerObserver(observer) {
		this.observers.push(observer);
	}
	notifyObservers() {
		var iterator = new ConvertToIterator(this.observers);
		while(iterator.hasNext()) {
			let observer = iterator.next();
			observer.update(this.duck);
		}
	}
}

export default Observable;
