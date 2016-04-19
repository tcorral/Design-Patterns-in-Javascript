import Chainable from './Chainable';

var oChainable = new Chainable();
// This must return "21"
console.log(oChainable.add(3).add(4).multiply(3).toString());