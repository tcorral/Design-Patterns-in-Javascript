import Singleton from './Singleton';

var oSingle1 = new Singleton();
var oSingle2 = new Singleton();
console.log(new Singleton().toString());
console.log("Are oSingle1 and oSingle2 the same instance? " + (oSingle1 === oSingle2));
