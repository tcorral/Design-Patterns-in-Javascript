import MallardDuck from '../../common/MallardDuck';
import RedheadDuck from '../../common/RedheadDuck';
import RubberDuck from '../../common/RubberDuck';
import DecoyDuck from './DecoyDuck';

let mallard = new MallardDuck();
let redhead = new RedheadDuck();
let rubber = new RubberDuck();
let decoy = new DecoyDuck();

mallard.quack();
mallard.swim();
mallard.fly();
mallard.display();

redhead.quack();
redhead.swim();
redhead.fly();
redhead.display();

rubber.quack();
rubber.swim();
rubber.fly();
rubber.display();

decoy.quack();
decoy.swim();
decoy.fly();
decoy.display();
