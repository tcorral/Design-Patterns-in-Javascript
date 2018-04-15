import Bottle from '../packing/Bottle';
import Item from '../Item';

class Drink extends Item {
    get packing() {
        return new Bottle();
    }
}

export default Drink;