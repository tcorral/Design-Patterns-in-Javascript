import MallardDuck from './MallardDuck';
import WildTurkey from './WildTurkey';
import TurkeyAdapter from './TurkeyAdapter';

let oMallardDuck = new MallardDuck();
let oWildTurkey = new WildTurkey();
let oTurkeyAdapter = new TurkeyAdapter(oWildTurkey);

oMallardDuck.fly();
oMallardDuck.quack();

oWildTurkey.fly();
oWildTurkey.gobble();

oTurkeyAdapter.fly();
oTurkeyAdapter.quack();