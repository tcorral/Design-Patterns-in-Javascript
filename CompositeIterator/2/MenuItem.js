var MenuItem = function(sName, sDescription, bVegetarian, nPrice){
	MenuComponent.apply(this);
	this.sName = sName;
	this.sDescription = sDescription;
	this.bVegetarian = bVegetarian;
	this.nPrice = nPrice;
};
MenuItem.prototype = new MenuComponent();
MenuItem.prototype.getName = function(){
	return this.sName;
};
MenuItem.prototype.getDescription = function(){
	return this.sDescription;
};
MenuItem.prototype.getPrice = function(){
	return this.nPrice;
};
MenuItem.prototype.isVegetarian = function(){
	return this.bVegetarian;
};
MenuItem.prototype.print = function(){
	console.log(this.getName() + ": " + this.getDescription() + ", " + this.getPrice() + "euros");
};
MenuItem.prototype.createIterator = function(){
	return new NullIterator();
};