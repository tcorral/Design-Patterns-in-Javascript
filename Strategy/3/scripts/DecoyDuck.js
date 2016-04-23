import Duck from './Duck';

class DecoyDuck extends Duck {
  display() {
    console.log("DecoyDuck show");
  }
}

export default DecoyDuck;
