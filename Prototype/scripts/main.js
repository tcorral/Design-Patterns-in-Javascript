import HumanBeing from './HumanBeing';

let me = new HumanBeing({ skinColor: 'pale', hairColor: 'brown', height:'173cm', weight: '100kg', gender: 'male'});

let clone = me.clone();

console.log(`Are original and clone the same instance? ${me === clone}`);

for(let key in me) {
    console.log(`Are both ${key} property values in original and clone the same value? ${me[key] === clone[key]}`);
}
