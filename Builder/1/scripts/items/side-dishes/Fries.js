import SideDishes from '../SideDishes';

class Fries extends SideDishes {
    get price() {
        return 2;
    }
    get name() {
        return 'Fries';
    }
}

export default Fries;