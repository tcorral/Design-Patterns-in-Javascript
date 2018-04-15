import SideDishes from '../SideDishes';

class Salad extends SideDishes {
    get price() {
        return 6;
    }
    get name() {
        return 'Salad';
    }
}

export default Salad;