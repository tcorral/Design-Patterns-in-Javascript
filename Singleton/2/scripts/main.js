import Singleton from './Singleton';

var oSingle1 = new Singleton();
var oSingle2 = new Singleton();
console.log(new Singleton().toString());
console.log("oSingle1 is the same instance that oSingle2? " + (oSingle1 === oSingle2));
