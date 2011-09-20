var DinnerMenu = function(){
	this.oMenuItems = {};
	this.length = 0;
	this.addItem("Vegetarian BLT", "(Fakin') Bacon with lettuce and tomato on whole wheat", true, 2.99);
	this.addItem("BLT", "Bacon with lettuce and tomato on whole wheat", false, 2.99);
	this.addItem("Soup of the day", "Soup of the day, with a side of potato salad", false, 3.29);
	this.addItem("Hotdog", "A hotdog with saurkraut, relish, onions, topped with cheese", false, 3.05);
};
DinnerMenu.MAX_ITEMS = 6;
DinnerMenu.prototype.addItem = function(sName, sDescription, bVegetarian, nPrice){	
	if(this.length === DinnerMenu.MAX_ITEMS){
		throw new Error("Sorry menu is full! Can't add item to menu");
	}
	var oMenuItem = new MenuItem(sName, sDescription, bVegetarian, nPrice);
	this.oMenuItems[sName] = oMenuItem;
	this.length = this.length + 1;
};
DinnerMenu.prototype.getMenuItems = function(){
	return this.oMenuItems;
};