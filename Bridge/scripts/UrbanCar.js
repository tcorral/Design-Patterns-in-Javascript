import Car from './Car';

class UrbanCar extends Car {
    constructor(color) {
        super('Urban car', 'Small and designed for the city', 12000, 2, color);
    }
}

export default UrbanCar;