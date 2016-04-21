var CurrentConditionsDisplay = function(oSubject) {
  Observer.apply(this);
  Display.apply(this);
  this.nTemperature = 0;
  this.nHumidity = 0;
  this.nPressure = 0;
  this.oSubject = oSubject;
  oSubject.registerObserver(this);
  this.update = function(nTemperature, nHumidity, nPressure) {
    this.nTemperature = nTemperature;
    this.nHumidity = nHumidity;
    this.nPressure = nPressure;
    this.display();
  };
  this.display = function() {
    console.log("Current conditions: " + this.nTemperature + "F degrees and " + this.nHumidity + "% humidity.");
  };
};
