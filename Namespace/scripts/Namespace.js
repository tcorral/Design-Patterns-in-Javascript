import App from './App';

export default (function(namespace) {
  let Ajax = function() {
    console.log('Ajax: Instanced!');
  };
  Ajax.prototype.setUp = function() {
    console.log('Ajax: Setup!');
    return this;
  };
  Ajax.prototype.call = function() {
    console.log('Ajax: Call!');
  };
  let DOM = function() {
    console.log('DOM: Instanced!');
  };
  DOM.prototype.byId = function(sId) {
    console.log('DOM: ById ' + sId + '!')
  };
  namespace.DOM = new DOM();
  namespace.Ajax = Ajax;
  return namespace;
}(App));
