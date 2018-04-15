import Wrapper from '../packing/Wrapper';
import Item from '../Item';

class Burger extends Item {
    get packing() {
        return new Wrapper();
    }
}

export default Burger;