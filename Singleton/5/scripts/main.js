import DatabaseConnection from './DatabaseConnection';

let oSingle1 = DatabaseConnection.instance;
let oSingle2 = DatabaseConnection.instance;
console.log("Are oSingle1 and oSingle2 the same instance? " + (oSingle1 === oSingle2));
