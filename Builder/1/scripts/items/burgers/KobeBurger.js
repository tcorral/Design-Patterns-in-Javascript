import Burger from '../Burger';

class KobeBurger extends Burger {
    get price() {
        return 235;
    }
    get name() {
        return 'Kobe Burger';
    }
}

export default KobeBurger;