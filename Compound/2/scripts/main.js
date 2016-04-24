import CountingDuckFactory from '../../common/CountingDuckFactory';
import Goose from '../../common/Goose';
import GooseAdapter from '../../common/GooseAdapter';
import QuackCounter from '../../common/QuackCounter';

let oDuckFactory = new CountingDuckFactory();
let oMallardDuck = oDuckFactory.createMallardDuck();
let oDuckCall = oDuckFactory.createDuckCall();
let oRedheadDuck = oDuckFactory.createRedheadDuck();
let oRubberDuck = oDuckFactory.createRubberDuck();
let oGoose = new Goose();
let oGooseAdapter = new GooseAdapter(oGoose);

console.log("Duck simulator:");

oMallardDuck.quack();
oDuckCall.quack();
oRedheadDuck.quack();
oRubberDuck.quack();
oGooseAdapter.quack();

console.log(QuackCounter.getQuacks());
