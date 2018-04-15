import BoxUp from '../packing/BoxUp';
import Item from '../Item';

class SideDishes extends Item {
    get packing() {
        return new BoxUp();
    }
}

export default SideDishes;