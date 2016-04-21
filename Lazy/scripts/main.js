import Lazy from './Lazy';

let counter = 0;
const elements = ['Zero', 'First', 'Second', 'Third', 'Fourth'];

let timeout = null;
let lazy = new Lazy(document.getElementById('test'), elements[counter], new Date());

timeout = setInterval(function() {
  if (counter === 4) {
    clearInterval(timeout);
  }
  lazy.update(elements[counter++], new Date());
}, 500);
