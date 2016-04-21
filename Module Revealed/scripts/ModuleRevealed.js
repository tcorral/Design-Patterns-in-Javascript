export default (function(win) {
  var oContainer = null;

  function setContainer(oCont) {
    oContainer = oCont;
  }

  function addZero(nTime) {
    return nTime < 10 ? '0' + nTime : nTime;
  }

  function getFormattedTime(dTime) {
    return addZero(dTime.getHours()) + ":" + addZero(dTime.getMinutes()) + ":" + addZero(dTime.getSeconds());
  }

  function insertTestModule() {
    oContainer.innerHTML = 'Test Module: ' + getFormattedTime(new Date());
  }

  function removeContent() {
    oContainer.innerHTML = '';
  }

  return {
    init: function(oContainer) {
      setContainer(oContainer);
      insertTestModule();
    },
    destroy: function() {
      removeContent();
    }
  };
}());
