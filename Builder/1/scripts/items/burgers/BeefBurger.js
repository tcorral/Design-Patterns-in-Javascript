import Burger from '../Burger';

class BeefBurger extends Burger {
    get price() {
        return 13;
    }
    get name() {
        return 'Beef Burger';
    }
}

export default BeefBurger;