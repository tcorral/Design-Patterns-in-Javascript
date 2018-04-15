import Burger from '../Burger';

class VeganBurger extends Burger {
    get price() {
        return 16;
    }
    get name() {
        return 'Vegan Burger';
    }
}

export default VeganBurger;