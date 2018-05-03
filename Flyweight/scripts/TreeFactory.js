import TreeType from './TreeType';

const treeTypesMap = new Map();
class TreeFactory {
    static getTreeType(name, color, treeConfig) {
        let result = treeTypesMap.get(name);
        if(result == null) {
            result = new TreeType(name, color, treeConfig);
            treeTypesMap.set(name, result);
        } 
        return result;
    }
}

export default TreeFactory;