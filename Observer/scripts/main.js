import WeatherData from './WeatherData';
import CurrentConditionsDisplay from './CurrentConditionsDisplay';

let oWeatherData = new WeatherData();
new CurrentConditionsDisplay(oWeatherData);
oWeatherData.setMeasurements(80, 65, 30.4);
