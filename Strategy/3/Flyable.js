var Flyable = function(fpCallback){
	this.fly = function(){
		fpCallback();
	};
};