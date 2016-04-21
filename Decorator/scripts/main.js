import Espresso from './Espresso';
import Mocha from './Mocha';
import Whip from './Whip';

let oEspressoWithMochaAndWhip = new Espresso();
oEspressoWithMochaAndWhip = new Mocha(oEspressoWithMochaAndWhip);
oEspressoWithMochaAndWhip = new Whip(oEspressoWithMochaAndWhip);

console.log(oEspressoWithMochaAndWhip.cost());
