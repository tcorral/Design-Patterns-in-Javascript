import Singleton from './Singleton';

var oSingle1 = Singleton;
var oSingle2 = Singleton;
console.log(Singleton.toString());
console.log("oSingle1 is the same instance that oSingle2? " + (oSingle1 === oSingle2));
