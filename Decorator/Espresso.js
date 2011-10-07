var Espresso = function()
{
	Beverage.apply(this);
	this.sDescription = 'Espresso';
};
Espresso.prototype = new Beverage();
Espresso.prototype.cost = function()
{
	return 1.99;
};
