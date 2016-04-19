import Duck from './Duck';

class TurkeyAdapter extends Duck{
	constructor(oTurkey) {
		super(oTurkey);
		this.oTurkey = oTurkey;
	}
	fly() {
		for(let index = 0, maxFly = 5; index < maxFly; index++) {
			this.oTurkey.fly();
		}
	}

	quack() {
		this.oTurkey.gobble();
	}
}

export default TurkeyAdapter;