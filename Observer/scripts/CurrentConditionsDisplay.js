import Observer from './Observable';
import Display from './Displayable';

class CurrentConditionsDisplay extends Observer(Display(null)) {
  constructor(subject) {
    super();
    this.temperature = 0;
    this.humidity = 0;
    this.pressure = 0;
    this.subject = subject;
    this.subject.registerObserver(this);
  }

  update(temperature, humidity, pressure) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }

  display() {
    console.log("Current conditions: " + this.temperature + "F degrees and " + this.humidity + "% humidity.");
  }
}

export default CurrentConditionsDisplay;
