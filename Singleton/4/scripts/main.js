import Singleton from './Singleton';

var oSingle1 = Singleton.getInstance();
var oSingle2 = Singleton.getInstance();
console.log(Singleton.getInstance().toString());
console.log("oSingle1 is the same instance that oSingle2? " + (oSingle1 === oSingle2));
