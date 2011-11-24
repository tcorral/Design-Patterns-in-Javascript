var Menu = function(sName, sDescription){
	MenuComponent.apply(this);
	this.aMenuComponents = [];
	this.sName = sName;
	this.sDescription = sDescription;
	this.createIterator = function(){
		throw new Error("This method must be overwritten!");
	};
};
Menu.prototype = new MenuComponent();
Menu.prototype.add = function(oMenuComponent){
	this.aMenuComponents.push(oMenuComponent);
};
Menu.prototype.remove = function(oMenuComponent){
	var aMenuItems = [];
	var nMenuItem = 0;
	var nLenMenuItems = this.aMenuComponents.length;
	var oItem = null;

	for(; nMenuItem < nLenMenuItems;){
		oItem = this.aMenuComponents[nMenuItem];
		if(oItem !== oMenuComponent){
			aMenuItems.push(oItem);
		}
		nMenuItem = nMenuItem + 1;
	}
	this.aMenuComponents = aMenuItems;
};
Menu.prototype.getChild = function(nIndex){
	return this.aMenuComponents[nIndex];
};
Menu.prototype.getName = function(){
	return this.sName;
};
Menu.prototype.getDescription = function(){
	return this.sDescription;
};
Menu.prototype.print = function(){
	console.log(this.getName() + ": " + this.getDescription());
	console.log("--------------------------------------------");

	var nMenuComponent = 0;
	var nLenMenuComponents = this.aMenuComponents.length;
	var oMenuComponent = null;

	for(; nMenuComponent < nLenMenuComponents;){
		oMenuComponent = this.aMenuComponents[nMenuComponent];
		oMenuComponent.print();
		nMenuComponent = nMenuComponent + 1;
	}
};
