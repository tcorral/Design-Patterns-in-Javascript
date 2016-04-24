import Subject from './Subject';

class WeatherData extends Subject {
  constructor() {
    super();
    this.observers = {};
    this.temperature = 0;
    this.humidity = 0;
    this.pressure = 0;
  }

  registerObserver(observer) {
    this.observers[observer.id] = observer;
  }

  removeObserver(observer) {
    delete this.observers[observer.id];
  }

  notifyObservers() {
    for (let observerId in this.observers) {
      if (this.observers.hasOwnProperty(observerId)) {
        this.observers[observerId].update(this.temperature, this.humidity, this.pressure);
      }
    }
  }

  measurementsChanged() {
    this.notifyObservers();
  }

  setMeasurements(temperature, humidity, pressure) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;

    this.measurementsChanged();
  }
}

export default WeatherData;
