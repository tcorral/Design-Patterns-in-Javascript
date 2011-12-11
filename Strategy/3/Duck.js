var Duck = function(){

};
Duck.prototype.swim = function(){
	alert("Chop!");
};
Duck.prototype.display = function(){
	throw new Error("This method must be overwritten!");
};
