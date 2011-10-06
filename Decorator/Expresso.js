var Expresso = function()
{
	Beverage.apply(this);
	this.sDescription = 'Expresso';
};
Expresso.prototype = new Beverage();
Expresso.prototype.cost = function()
{
	return 1.99;
};
