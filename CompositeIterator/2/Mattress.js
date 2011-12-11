var Mattress = function(aMenus){
	this.aMenus = aMenus;
};
Mattress.prototype.printMenu = function(){
	this.aMenus.print();
};
Mattress.prototype.printVegetarianMenu = function(){
	var oIterator = this.aMenus.createIterator();
	var oMenuComponent = null;
	console.log("VEGETARIAN MENU");
	while(oIterator.hasNext()){
		oMenuComponent = oIterator.next();
		try{
			if(oMenuComponent.isVegetarian()){
				oMenuComponent.print();
			}
		}catch(erError){}
	}
};
