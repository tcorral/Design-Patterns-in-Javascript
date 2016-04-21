class Nullify {
  fillContent() {
    let test1 = document.getElementById("test1");
    let test2 = document.getElementById("test2");
    let test3 = document.getElementById("test3");

    test1.onclick = function () {};
    test2.onclick = function () {};
    test3.onclick = function () {};

    test1.innerHTML = 'TEST 1';
    test2.innerHTML = 'TEST 2';
    test3.innerHTML = 'TEST 3';

    test1 = test2 = test3 = null;
  }
}

export default Nullify;
