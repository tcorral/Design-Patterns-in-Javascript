const privateX = new WeakMap();
const privateY = new WeakMap();
const privateTreeType = new WeakMap();

class Tree {
    constructor(x = 0, y = 0, treeType) {
        privateX.set(this, x);
        privateY.set(this, y);
        privateTreeType.set(this, treeType);
    }
    get x() {
        return privateX.get(this);
    }
    get y() {
        return privateY.get(this);
    }
    get treeType() {
        return privateTreeType.get(this);
    }
    render(canvas) {
        const context = canvas.getContext("2d");
        this.treeType.render(context, this.x, this.y);
    }
}

export default Tree;