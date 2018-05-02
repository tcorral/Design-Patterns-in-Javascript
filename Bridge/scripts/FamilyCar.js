import Car from './Car';

class FamilyCar extends Car {
    constructor(color) {
        super('Family car', 'Enjoy with your family', 30000, 5, color);
    }
}

export default FamilyCar;