var TodoModel = function(){
	this.aItems = [];
};
TodoModel.prototype.add = function(oItem, fpCallback){
	 this.aItems.push({
        text: oItem,
        done: false,
        id: this.aItems.length
    });

    jQuery.ajax({
        url: "/todo-items/add",
        type: "POST",
        success: function (oData) {
            fpCallback(null, oData);
        },
        error: function (oXhr) {
            fpCallback({ message: oXhr.status + ": " + oXhr.responseText });
        }
    });
};
TodoModel.prototype.all = function(fpCallback){
	jQuery.ajax({
        url: "/todo-items",
        success: function (oData) {
            fpCallback(null, oData);
        },
        error: function (oXhr) {
            fpCallback({ message: oXhr.status + ": " + oXhr.responseText });
        }
    });
};
TodoModel.prototype.undoItem = function(sId, fpCallback){
	jQuery.ajax({
        url: "/todo-items/undo",
        type: "POST",
        success: function (oData) {
            fpCallback(null, oData);
        },
        error: function (oXhr) {
            fpCallback({ message: oXhr.status + ": " + oXhr.responseText });
        }
    });
};
TodoModel.prototype.completeItem = function(sId, fpCallback){
	jQuery.ajax({
        url: "/todo-items/complete",
        type: "POST",
        success: function (oData) {
            fpCallback(null, oData);
        },
        error: function (oXhr) {
            fpCallback({ message: oXhr.status + ": " + oXhr.responseText });
        }
    });
};
