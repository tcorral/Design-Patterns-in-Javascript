import Switchable from './Switchable';

class TheaterLights extends Switchable(null) {
  on() {
    console.log("The lights are on!");
  }

  off() {
    console.log("The lights are off!");
  }
}


export default TheaterLights;
