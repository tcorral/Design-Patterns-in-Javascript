class Car {
    constructor(name, description, price, places = 2, color, brand = 'Cartisfaction') {
        this.brand = brand;
        this.name = name;
        this.description = description;
        this.price = price;
        this.places = places;
        this.color = color;
    }
    applyColor() {
        console.log(`${this.name} car painted with color ${this.color.applyColor()}`);
    }
}

export default Car;