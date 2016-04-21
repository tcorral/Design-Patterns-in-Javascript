import Switchable from './Switchable';

class Amplifier extends Switchable(null) {
  constructor() {
    super();
    this.volume = 0;
    this.dvdPlayer = null;
    this.cdPlayer = null;
    this.tuner = null;
    this.surroundSound = false;
    this.stereoSound = false;
  }

  on() {
    console.log("Amplifier is on!");
  }

  off() {
    console.log("Amplifier is off!");
  }

  setVolume(volume) {
    this.volume = volume;
    console.log("Volume change to " + volume);
  }

  setDvdPlayer(dvdPlayer) {
    this.dvdPlayer = dvdPlayer;
    console.log("Plugged DVD Player to Amplifier!");
  }

  setCdPlayer(cdPlayer) {
    this.cdPlayer = cdPlayer;
    console.log("Plugged Cd Player to Amplifier!");
  }

  setTuner(tuner) {
    this.tuner = tuner;
    console.log("Plugged on Tuner to Amplifier!");
  }

  setSurroundSound() {
    this.surroundSound = true;
    console.log("Surround Mode is active!");
  }

  setStereoSound() {
    this.stereoSound = true;
    console.log("Stereo Mode is active!");
  }
}

export default Amplifier;
