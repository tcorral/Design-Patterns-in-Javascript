import Iterator from './Iterator';

class NullIterator extends Iterator{
	next() {
		return null;
	}
	hasNext() {
		return false;
	}
	remove() {
		throw new Error("You can't remove nothing!");
	}
}

export default NullIterator;
