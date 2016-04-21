(function(win, doc, ns) {
  var Ajax = function() {
    console.log('Ajax: Instanced!');
  };
  Ajax.prototype.setUp = function() {
    console.log('Ajax: Setup!');
    return this;
  };
  Ajax.prototype.call = function() {
    console.log('Ajax: Call!');
  };
  var DOM = function() {
    console.log('DOM: Instanced!');
  };
  DOM.prototype.byId = function(sId) {
    console.log('DOM: ById ' + sId + '!')
  };
  ns.DOM = new DOM();
  ns.Ajax = Ajax;
}(window, document, App));
