import DatabaseConnection from './DatabaseConnection';

var oSingle1 = DatabaseConnection.instance;
var oSingle2 = DatabaseConnection.instance;
console.log("Are oSingle1 and oSingle2 the same instance? " + (oSingle1 === oSingle2));
