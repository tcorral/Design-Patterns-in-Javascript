import Drink from '../Drink';

class Champagne extends Drink {
    get price() {
        return 90;
    }
    get name() {
        return 'Champagne';
    }
}

export default Champagne;