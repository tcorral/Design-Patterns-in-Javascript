const itemList = new WeakMap();
class Meal {
    get list() {
        if(!itemList.get(this)) {
            itemList.set(this, []);
        }
        return itemList.get(this);
    }
    addItem(item) {
        this.list.push(item);
    }
    getCost() {
        return this.list.reduce((accum, item) => {
            accum += item.price;
            return accum;
        }, 0);
    }
    showItems() {
        this.list.forEach((item) => {
            console.log(`Item: ${item.name}, Packing: ${item.packing.pack()}, Price: $${item.price}`);
        });
    }
}

export default Meal;