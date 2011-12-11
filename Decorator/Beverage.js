var Beverage = function()
{
	this.sDescription = 'Unknown beverage';
};
Beverage.prototype.getDescription = function(){
	return this.sDescription;
};
Beverage.prototype.cost = function()
{
	throw new Error("This method must be overwritten!");
};
