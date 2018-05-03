import TreeFactory from './TreeFactory';
import Tree from './Tree';

const privateTrees = new WeakMap();
class Forest {
    constructor() {
        privateTrees.set(this, []);
    }
    get trees() {
        return privateTrees.get(this);
    }
    plantTree(x, y, name, color, treeConfig) {
        const type = TreeFactory.getTreeType(name, color, treeConfig);
        const tree = new Tree(x, y, type);
        this.trees.push(tree);    
    }
    render(canvas) {
        this.trees.forEach((tree) => {
            tree.render(canvas);
        });
    }
}

export default Forest;