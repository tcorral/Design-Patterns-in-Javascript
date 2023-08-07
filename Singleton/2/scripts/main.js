import Singleton from './Singleton';

let oSingle1 = new Singleton();
let oSingle2 = new Singleton();
console.log(new Singleton().toString());
console.log("Are oSingle1 and oSingle2 the same instance? " + (oSingle1 === oSingle2));
