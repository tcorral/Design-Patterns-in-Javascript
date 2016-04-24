import Duck from './Duck';

class MallardDuck extends Duck {
  fly() {
    console.log('Can fly long distances!');
  }

  quack() {
    console.log('Quack! Quack!');
  }
}

export default MallardDuck;
