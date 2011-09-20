var Maitress = function(aMenus){
	this.aMenus = aMenus;
};
Maitress.prototype._printMenu = function(oIterator){
	var oMenuItem = null;
	while(oIterator.hasNext()){
		oMenuItem = oIterator.next();
		console.log(oMenuItem.getName() + ": " + oMenuItem.getDescription() + ", " + oMenuItem.getPrice() + "eur.");
	}
};
Maitress.prototype.printMenu = function(){
	var nMenu = 0;
	var nLenMenus = this.aMenus.length;
	var oMenu = null;
	var oIterator = null;
	
	for(; nMenu < nLenMenus;)
	{
		oMenu = this.aMenus[nMenu];
		oIterator = oMenu.createIterator();
		this._printMenu(oIterator);
		nMenu = nMenu + 1;
	}
};