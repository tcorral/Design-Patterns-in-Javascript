import Duck from './Duck';

const MAX_FLIES = 5;

class TurkeyAdapter extends Duck {
  constructor(oTurkey) {
    super(oTurkey);
    this.oTurkey = oTurkey;
  }

  fly() {
    for (let index = 0; index < MAX_FLIES; index++) {
      this.oTurkey.fly();
    }
  }

  quack() {
    this.oTurkey.gobble();
  }
}

export default TurkeyAdapter;
