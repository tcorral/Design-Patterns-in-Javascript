var nElement = 0;
var nTimes = 100000;
function createElement() {
  var div = document.createElement("div");
  div.onclick = function () {};
}
for (; nElement < nTimes; nElement++) {
  createElement();
}
