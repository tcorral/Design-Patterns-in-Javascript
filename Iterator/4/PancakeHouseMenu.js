var PancakeHouseMenu = function(){
	Menu.apply(this);
	this.nPosition = -1;
	this.aMenuItems = [];
	this.createIterator = function(){
		return new PancakeHouseMenuIterator(this.aMenuItems);
	};
	this.addItem("K&B's Pancake Breakfast", "Pancakes with scrambled eggs, and toast", true, 2.99);
	this.addItem("Regular Pancake Breakfast", "Pancakes with fried eggs, sausage", false, 2.99);
	this.addItem("Blueberry Pancakes", "Pancakes made with fresh blueberries", true, 3.49);
	this.addItem("Waffles", "Waffles, with your choice of blueberries or strawberries", true, 3.59);
};
PancakeHouseMenu.prototype.addItem = function(sName, sDescription, bVegetarian, nPrice){
	var oMenuItem = new MenuItem(sName, sDescription, bVegetarian, nPrice);
	this.aMenuItems.push(oMenuItem);
};
PancakeHouseMenu.prototype.getMenuItems = function(){
	return this.aMenuItems;
};