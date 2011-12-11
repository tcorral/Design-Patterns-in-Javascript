var CompositeIterator = function(oIterator){
	Iterator.apply(this);
	this.aStack = [oIterator];
};
CompositeIterator.prototype = new Iterator();
CompositeIterator.prototype.hasNext = function(){
	var oIterator = null;
	if(this.aStack.length === 0){
		return false;
	}else {
		oIterator = this.aStack[this.aStack.length];
		if(oIterator.hasNext() === false){
			this.aStack.pop();
			return this.hasNext();
		}else{
			return true;
		}
	}
};
CompositeIterator.prototype.next = function(){
	var oIterator = null;
	var oMenuComponent = null;
	if(this.hasNext()){
		oIterator = this.aStack[this.aStack.length];
		oMenuComponent = oIterator.next();
		if(oMenuComponent instanceof Menu){
			this.aStack.push(oMenuComponent.createIterator());
		}
		return oMenuComponent;
	}else{
		return null;
	}
};

CompositeIterator.prototype.remove = function(){
	throw new Error("We are not supporting remove, just traversal");
};