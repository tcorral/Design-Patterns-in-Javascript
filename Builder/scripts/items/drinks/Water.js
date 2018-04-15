import Drink from '../Drink';

class Water extends Drink {
    get price() {
        return 2.5;
    }
    get name() {
        return 'Water';
    }
}

export default Water;