import Forest from './Forest';

const CANVAS_SIZE = 600;
const TREES_TO_DRAW = 99900;
const TREE_TYPES = 2;
const forest = new Forest();

const getAmountOfTreesToRender = (amount, types) => {
    return Math.floor(amount / types);
};

const random = (min, max) => {
    return min + (Math.random() * ((max - min) + 1));
}
const renderForest = (forest, canvas) => {
    for(let i = 0; i < getAmountOfTreesToRender(TREES_TO_DRAW, TREE_TYPES); i++) {
        forest.plantTree(random(0, CANVAS_SIZE), random(0, CANVAS_SIZE), 'Red Maple', 'red', 'Red Maple texture');
        forest.plantTree(random(0, CANVAS_SIZE), random(0, CANVAS_SIZE), 'Gray Birch', 'gray', 'Gray Birch texture stub');
    }
    
    forest.render(canvas);
    
    console.log(TREES_TO_DRAW + ' trees rendered');
    console.log('Memory usage:');
    console.log('Tree size (8 bytes) * ' + TREES_TO_DRAW + '+ TreeTypes size (~30 bytes) * ' + TREE_TYPES);
    console.log('Total: ' + ((TREES_TO_DRAW * 8 + TREE_TYPES * 30) / 1024  / 1024) + 'MB (instead of ' + ((TREES_TO_DRAW * 38) / 1024 / 1024) + 'MB)');
}

renderForest(new Forest(), document.createElement('canvas'));