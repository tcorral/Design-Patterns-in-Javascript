var Tea = function(){
	CafeineBeverage.apply(this);
};
Tea.prototype = new CafeineBeverage();
Tea.prototype.brew = function(){
	console.log("Steeping the tea!");
};
Tea.prototype.addCondiments = function(){
	console.log("Adding lemmon!");
};
