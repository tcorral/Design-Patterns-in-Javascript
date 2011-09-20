var Maitress = function(aMenus){
	this.aMenus = aMenus;
};
Maitress.prototype.printMenu = function(oIterator){
	this.aMenus.print();
};