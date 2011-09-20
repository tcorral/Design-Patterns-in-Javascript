var MenuComponent = function(){
};
MenuComponent.prototype.getName = function(){
	throw new Error("This method must be overwritten!");
};
MenuComponent.prototype.getDescription = function(){
	throw new Error("This method must be overwritten!");
};
MenuComponent.prototype.getPrice = function(){
	throw new Error("This method must be overwritten!");
};
MenuComponent.prototype.isVegetarian = function(){
	throw new Error("This method must be overwritten!");
};
MenuComponent.prototype.print = function(){
	throw new Error("This method must be overwritten!");
};
MenuComponent.prototype.add = function(oComponent){
	throw new Error("This method must be overwritten!");
};
MenuComponent.prototype.remove = function(oComponent){
	throw new Error("This method must be overwritten!");
};
MenuComponent.prototype.getChild = function(nIndex){
	throw new Error("This method must be overwritten!");
};
MenuComponent.prototype.createIterator = function(){
	throw new Error("This method must be overwritten!");
};
