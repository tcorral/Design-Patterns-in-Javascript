import Switchable from './Switchable';
import Playable from './Playable';

class CdPlayer extends Switchable(Playable(null)) {
  on() {
    console.log("CdPlayer is on!");
  }

  off() {
    console.log("CdPlayer is off!");
  }

  eject() {
    console.log("Eject Cd!");
  }

  play(cd) {
    console.log("Playing " + cd.sName);
  }

  stop() {
    console.log("Stop CdPlayer!");
  }
}

export default CdPlayer;
