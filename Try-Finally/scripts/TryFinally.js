class TryFinally {
  getContent() {
    var test1 = document.getElementById("test1");
    var test2 = document.getElementById("test2");
    var test3 = document.getElementById("test3");
    test1.onclick = function() {};
    test2.onclick = function() {};
    test3.onclick = function() {};
    try {
      return {
        test1: test1.innerHTML,
        test2: test2.innerHTML,
        test3: test3.innerHTML
      }
    } finally {
      test1 = test2 = test3 = null;
    }
  }
}

export default TryFinally;
