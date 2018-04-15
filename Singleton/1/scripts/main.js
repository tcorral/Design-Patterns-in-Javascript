import Singleton from './Singleton';

var oSingle1 = Singleton;
var oSingle2 = Singleton;
console.log(Singleton.toString());
console.log("Are oSingle1 and oSingle2 the same instance? " + (oSingle1 === oSingle2));
