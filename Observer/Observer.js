var Observer = function(){
	this.update = function(nTemperature, nHumidity, nPressure){
		throw new Error("This method must be overwritten!");
	};
};