var Quackologist = function(){
	Observer.apply(this);
	this.update = function(oDuck){
		console.log("Quackologist: " + oDuck + "just quacked");
	};
};
