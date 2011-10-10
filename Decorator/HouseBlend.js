var HouseBlend = function()
{
	Beverage.apply(this);
	this.sDescription = 'House Blend coffee';
};
HouseBlend.prototype = new Beverage();
HouseBlend.prototype.cost = function()
{
	return 0.89;
};
