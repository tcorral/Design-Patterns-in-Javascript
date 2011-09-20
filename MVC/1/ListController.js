var ListController = function(oView, oModel){
	this.oView = oView;
	this.oModel = oModel;
};
ListController.prototype.init = function(){
	var self = this;
	this.oModel.all(function(oErr, aItems){

		var todoHTML = '';
		var doneHTML = '';
		var sClassName = '';
		var nItem = 0;
		var nLenItems = aItems.length;
		var oItem = null;

		if(oErr){
			return self.handleError("Server failed to get todo items", oErr);
		}

		for(; nItem < nLenItems;){
			oItem = aItems[nItem];
			if(oItem.done){
				doneHTML += "<li class='done' id='item_" + nItem + "'>" + oItem.text + "</li>";
			}else{
				todoHTML += "<li class='todo' id='item_" + nItem + "'>" + oItem.text + "</li>";
			}
			nItem = nItem + 1;
		}
		self.oView.innerHTML = todoHTML + doneHTML;

		$(".todo", self.oView).bind("click", function(){
        	var oElement = this;
        	debugger;
        	self.oModel.completeItem(this.id, function(){
        		oElement.className = "done";
        	});
        });
        $(".done", self.oView).bind("click", function(){
        	var oElement = this;
        	debugger;
        	self.oModel.undoItem(this.id, function(){
        		oElement.className = "todo";
        	});
        });
	});
};
ListController.prototype.handleError = function(sMessage, erError){
	var oLi = document.createElement("li");
    oLi.className = "error";
    oLi.innerHTML = message;
    this.oView.appendChild(oLi);
};
