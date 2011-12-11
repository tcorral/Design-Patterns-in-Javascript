var CafeMenu = function(){
	Menu.apply(this);
	this.nPosition = -1;
	this.aMenuItems = [];
	this.createIterator = function(){
		return new CafeMenuIterator(this.aMenuItems);
	};
	this.addItem("Express", "Coffee from machine", false, 0.99);
	this.addItem("Long with water", "Coffee with a lot of water", false, 1.20);
	this.addItem("On the rocks", "Coffee with ice", false, 2.00);
};
CafeMenu.prototype.addItem = function(sName, sDescription, bVegetarian, nPrice){
	var oMenuItem = new MenuItem(sName, sDescription, bVegetarian, nPrice);
	this.aMenuItems.push(oMenuItem);
};
CafeMenu.prototype.getMenuItems = function(){
	return this.aMenuItems;
};