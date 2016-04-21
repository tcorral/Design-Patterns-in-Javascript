import MallardDuck from '../../common/MallardDuck';
import DuckCall from '../../common/DuckCall';
import RedheadDuck from '../../common/RedheadDuck';
import RubberDuck from '../../common/RubberDuck';
import Goose from '../../common/Goose';
import GooseAdapter from '../../common/GooseAdapter';

let oMallardDuck = new MallardDuck();
let oDuckCall = new DuckCall();
let oRedheadDuck = new RedheadDuck();
let oRubberDuck = new RubberDuck();
let oGoose = new Goose();
let oGooseAdapter = new GooseAdapter(oGoose);

console.log("Duck simulator:");

oMallardDuck.quack();
oDuckCall.quack();
oRedheadDuck.quack();
oRubberDuck.quack();
oGooseAdapter.quack();
