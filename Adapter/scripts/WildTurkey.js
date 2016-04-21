import Turkey from './Turkey';

class WildTurkey extends Turkey {
  fly() {
    console.log('Fly short distance!');
  }

  gobble() {
    console.log('Gobble!, Gobble!');
  }
}

export default WildTurkey;
