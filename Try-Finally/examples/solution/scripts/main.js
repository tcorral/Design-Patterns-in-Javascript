let aElements = [];
let nElement = 0;
let nTimes = 100000;
function createElement() {
  var div = document.createElement("div");
  div.onclick = function () {};
  try {
    return div;
  } finally {
    div = null;
  }
}
for (; nElement < nTimes; nElement++) {
  aElements.push(createElement());
}
