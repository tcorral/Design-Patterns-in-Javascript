import Switchable from './Switchable';

class Projector extends Switchable(null) {
  constructor() {
    super();
    this.wideScreenMode = false;
  }

  on() {
    console.log("Projector is on!");
  }

  off() {
    console.log("Projector is off!");
  }

  setWideScreenMode() {
    this.wideScreenMode = true;
    console.log("Projector now is on wide screen mode!");
  }
}

export default Projector;
