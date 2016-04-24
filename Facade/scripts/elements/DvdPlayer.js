import Switchable from './Switchable';
import Playable from './Playable';

class DvdPlayer extends Switchable(Playable(null)) {
  on() {
    console.log("DvdPlayer is on!");
  }

  off() {
    console.log("DvdPlayer is off!");
  }

  eject() {
    console.log("Eject Dvd!");
  }

  play(movie) {
    console.log("Playing " + movie.name);
  }

  stop() {
    console.log("Stop DvdPlayer!");
  }
}

export default DvdPlayer;
