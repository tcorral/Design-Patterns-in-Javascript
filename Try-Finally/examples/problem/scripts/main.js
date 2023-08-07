let aElements = [];
let nElement = 0;
let nTimes = 100000;
function createElement() {
  let div = document.createElement("div");
  div.onclick = function () {};
  return div;
}
for (; nElement < nTimes; nElement++) {
  aElements.push(createElement());
}
