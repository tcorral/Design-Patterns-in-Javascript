var Mattress = function(aMenus){
	this.aMenus = aMenus;
};
Mattress.prototype.printMenu = function(){
	this.aMenus.print();
};