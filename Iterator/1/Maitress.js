var Maitress = function(){
	this.aBreakFastItems = new PancakeHouseMenu().getMenuItems();
	this.oLunchItems = new DinnerMenu().getMenuItems();
};
Maitress.prototype.printMenu = function(){
	var nMenuItem = 0;
	var nLenMenuItems = 0;
	var oMenuItem = null;
	var sKey = '';
	
	nLenMenuItems = this.aBreakFastItems.length;
	
	for(; nMenuItem < nLenMenuItems;)
	{
		oMenuItem = this.aBreakFastItems[nMenuItem];
		console.log(oMenuItem.getName() + ": " + oMenuItem.getDescription() + ", " + oMenuItem.getPrice() + "eur.");
		nMenuItem = nMenuItem + 1;
	}
	
	for(sKey in this.oLunchItems)
	{
		if(this.oLunchItems.hasOwnProperty(sKey)){
			oMenuItem = this.oLunchItems[sKey];
			console.log(oMenuItem.getName() + ": " + oMenuItem.getDescription() + ", " + oMenuItem.getPrice() + "eur.");
		}
		
	}
};
Maitress.prototype.printBreakfastMenu = function(){
	var nMenuItem = 0;
	var nLenMenuItems = 0;
	var oMenuItem = null;
	
	nLenMenuItems = this.aBreakFastItems.length;
	
	for(; nMenuItem < nLenMenuItems;)
	{
		oMenuItem = this.aBreakFastItems[nMenuItem];
		console.log(oMenuItem.getName() + ": " + oMenuItem.getDescription() + ", " + oMenuItem.getPrice() + "eur.");
		nMenuItem = nMenuItem + 1;
	}
};
Maitress.prototype.printLunchMenu = function(){
	var sKey = '';
	for(sKey in this.oLunchItems)
	{
		if(this.oLunchItems.hasOwnProperty(sKey)){
			oMenuItem = this.oLunchItems[sKey];
			console.log(oMenuItem.getName() + ": " + oMenuItem.getDescription() + ", " + oMenuItem.getPrice() + "eur.");
		}
		
	}
};
Maitress.prototype.isItemVegetarian = function(sName){
	var nMenuItem = 0;
	var nLenMenuItems = 0;
	var oMenuItem = null;
	var sKey = '';
	
	nLenMenuItems = this.aBreakFastItems.length;
	
	for(; nMenuItem < nLenMenuItems;)
	{
		oMenuItem = this.aBreakFastItems[nMenuItem];
		if(oMenuItem.sName === sName){
			return oMenuItem.isVegetarian();
		}
		nMenuItem = nMenuItem + 1;
	}
	
	for(sKey in this.oLunchItems)
	{
		if(this.oLunchItems.hasOwnProperty(sKey)){
			oMenuItem = this.oLunchItems[sKey];
			if(oMenuItem.sName === sName){
				return oMenuItem.isVegetarian();
			}
		}
		
	}
	throw new Error("Sorry, but we don't have this in our menu!");
};