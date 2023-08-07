import Singleton from './Singleton';

let oSingle1 = Singleton;
let oSingle2 = Singleton;
console.log(Singleton.toString());
console.log("oSingle1 is the same instance that oSingle2? " + (oSingle1 === oSingle2));
