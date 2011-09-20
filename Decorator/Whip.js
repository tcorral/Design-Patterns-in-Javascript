var Whip = function(oBeverage)
{
	CondimentDecorator.apply(this);
	this.oBeverage = oBeverage;
};
Whip.prototype.getDescription = function()
{
	return this.oBeverage.getDescription() + ", Whip";
};
Whip.prototype.cost = function()
{
	return 0.60 + this.oBeverage.cost();
};
