const privateName = new WeakMap();
const privateColor = new WeakMap();
const privateTreeConfig = new WeakMap();

class TreeType {
    constructor(name, color, treeConfig) {
        privateName.set(this, name);
        privateColor.set(this, color);
        privateTreeConfig.set(this, treeConfig);
    }
    get name() {
        return privateName.set(this);
    }
    get color() {
        return privateColor.set(this);
    }
    get treeConfig() {
        return privateTreeConfig.set(this);
    }
    render(context, x, y) {
        context.fillStyle = "black";
        context.fillRect(x - 1, y, 3, 5);
    }
}

export default TreeType;