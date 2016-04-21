import CountingDuckFactory from '../../common/CountingDuckFactory';
import Goose from '../../common/Goose';
import GooseAdapter from '../../common/GooseAdapter';
import Flock from '../../common/Flock';
import QuackCounter from '../../common/QuackCounter';

let oDuckFactory = new CountingDuckFactory();
let oMallardDuck = oDuckFactory.createMallardDuck();
let oDuckCall = oDuckFactory.createDuckCall();
let oRedheadDuck = oDuckFactory.createRedheadDuck();
let oRubberDuck = oDuckFactory.createRubberDuck();
let oGoose = new Goose();
let oGooseAdapter = new GooseAdapter(oGoose);

let oFlockOfDucks = new Flock();

oFlockOfDucks.add(oMallardDuck);
oFlockOfDucks.add(oDuckCall);
oFlockOfDucks.add(oRedheadDuck);
oFlockOfDucks.add(oRubberDuck);
oFlockOfDucks.add(oGooseAdapter);

let oFlockOfMallards = new Flock();

let oMallardDuck1 = oDuckFactory.createMallardDuck();
let oMallardDuck2 = oDuckFactory.createMallardDuck();
let oMallardDuck3 = oDuckFactory.createMallardDuck();
let oMallardDuck4 = oDuckFactory.createMallardDuck();

oFlockOfMallards.add(oMallardDuck1);
oFlockOfMallards.add(oMallardDuck2);
oFlockOfMallards.add(oMallardDuck3);
oFlockOfMallards.add(oMallardDuck4);

oFlockOfDucks.add(oFlockOfMallards);

console.log("Duck simulator with Composite - Flocks:");

oFlockOfDucks.quack();

oFlockOfMallards.quack();

console.log(QuackCounter.getQuacks());
