var CondimentDecorator = function()
{
	Beverage.apply(this);
};
CondimentDecorator.prototype.getDescription = function()
{
	throw new Error("This method must be overwritten!");
};
