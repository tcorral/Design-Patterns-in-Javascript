var MenuItem = function(sName, sDescription, bVegetarian, nPrice){
	this.sName = sName;
	this.sDescription = sDescription;
	this.bVegetarian = bVegetarian;
	this.nPrice = nPrice;
};
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
