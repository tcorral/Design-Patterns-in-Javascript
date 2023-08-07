import Singleton from './Singleton';

let oSingle1 = Singleton;
let oSingle2 = Singleton;
console.log(Singleton.toString());
console.log("Are oSingle1 and oSingle2 the same instance? " + (oSingle1 === oSingle2));
