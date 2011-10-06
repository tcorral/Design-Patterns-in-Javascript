var Beverage = function()
{
	this.sDescription = 'Unknown beverage';
};
Beverage.prototype.getDescription = function(){
	throw new Error("This method must be overwritten!");
};
Beverage.prototype.cost = function()
{
	throw new Error("This method must be overwritten!");
};
