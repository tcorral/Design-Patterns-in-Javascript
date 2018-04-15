import Singleton from './Singleton';

var oSingle1 = Singleton.getInstance();
var oSingle2 = Singleton.getInstance();
console.log(Singleton.getInstance().toString());
console.log("Are oSingle1 and oSingle2 the same instance? " + (oSingle1 === oSingle2));
