let nElement = 0;
let nTimes = 100000;
function createElement() {
  let div = document.createElement("div");
  div.onclick = function () {};
  div = null;
}
for (; nElement < nTimes; nElement++) {
  createElement();
}
