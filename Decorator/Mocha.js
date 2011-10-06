var Mocha = function(oBeverage)
{
	CondimentDecorator.apply(this);
	this.oBeverage = oBeverage;
};
Mocha.prototype = new CondimentDecorator();
Mocha.prototype.getDescription = function()
{
	return this.oBeverage.getDescription() + ", Mocha";
};
Mocha.prototype.cost = function()
{
	return 0.20 + this.oBeverage.cost();
};
