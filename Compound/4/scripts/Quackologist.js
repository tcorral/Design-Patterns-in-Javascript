import Observer from './Observer';

class Quackologist extends Observer {
  update(duck) {
    console.log("Quackologist: " + oDuck + "just quacked");
  }
}

export default Quackologist;
