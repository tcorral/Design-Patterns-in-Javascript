let oConsole = document.getElementById("console");
let oList = oConsole.getElementsByTagName("ul")[0];
function fpLog(sMessage) {
  let oElement = document.createElement("li");
  oElement.appendChild(document.createTextNode("- " + sMessage));
  oList.appendChild(oElement);
};

if (!window.console) {
  window.console = {};
  window.console.log = function(sMessage) {
    fpLog(sMessage);
  };
} else {
  if (window.console.log) {
    let fpConsoleLog = window.console.log;
    window.console.log = function(sMessage) {
      fpLog(sMessage);
      fpConsoleLog.call(window.console, sMessage);
    };
  }
}
