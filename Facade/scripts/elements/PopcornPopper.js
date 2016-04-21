import Switchable from './Switchable';

class PopcornPopper extends Switchable(null) {
  on() {
    console.log("PopcornPopper is on!");
  }

  off() {
    console.log("PopcornPopper is off!");
  }

  pop() {
    console.log("Yum!Yum!");
  }
}

export default PopcornPopper;
