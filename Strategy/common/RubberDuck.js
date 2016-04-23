import Duck from './Duck';

class RubberDuck extends Duck {
  quack() {
    console.log('Squeak!');
  }

  fly() {
    // Don't do anything;
  }

  display() {
    console.log('RubbberDuck show');
  }
}

export default RubberDuck;
