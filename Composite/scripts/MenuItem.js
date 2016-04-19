import MenuComponent from './MenuComponent';

class MenuItem extends MenuComponent {
	constructor(name, description, isVegetarian, price) {
		super();
		this.name = name;
		this.description = description;
		this._isVegetarian = isVegetarian;
		this.price = price;
		return this;
	}
	getName() {
		return this.name;
	}
	getDescription() {
		return this.description;
	}
	getPrice() {
		return this.price;
	}
	isVegetarian() {
		return this._isVegetarian;
	}
	print() {
		console.log(this.getName() + ": " + this.getDescription() + ", " + this.getPrice() + "euros");
	}
}

export default MenuItem;
