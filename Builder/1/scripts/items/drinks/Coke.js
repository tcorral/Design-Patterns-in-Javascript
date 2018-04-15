import Drink from '../Drink';

class Coke extends Drink {
    get price() {
        return 3.5;
    }
    get name() {
        return 'Coke';
    }
}

export default Coke;