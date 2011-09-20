var Maitress = function(aMenus){
	this.aMenus = aMenus;
};
Maitress.prototype.printMenu = function(oIterator){
	this.aMenus.print();
};
Maitress.prototype.printVegetarianMenu = function(){
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
