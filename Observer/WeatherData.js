var WeatherData = function(){
	Subject.apply(this);
	this.oObservers = {};
	this.nTemperature = 0;
	this.nHumidity = 0;
	this.nPressure = 0;
	this.registerObserver = function(oObserver){
		this.oObservers[oObserver.id] = oObserver;
	};
	this.removeObserver = function(oObserver){
		delete this.oObservers[oObserver.id];
	};
	this.notifyObservers = function(){
		var sObserverId = '';
		for(sObserverId in this.oObservers){
			if(this.oObservers.hasOwnProperty(sObserverId)){
				this.oObservers[sObserverId].update(this.nTemperature, this.nHumidity, this.nPressure);
			}
		}
	};
};
WeatherData.prototype.measurementsChanged = function(){
	this.notifyObservers();
};
WeatherData.prototype.setMeasurements = function(nTemperature, nHumidity, nPressure){
	this.nTemperature = nTemperature;
	this.nHumidity = nHumidity;
	this.nPressure = nPressure;

	this.measurementsChanged();
};

