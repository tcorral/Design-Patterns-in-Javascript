var PancakeHouseMenuIterator = function(aMenuItems){
	this.aMenuItems = aMenuItems;
	Iterator.apply(this);
	this.nPosition = -1;
	this.nLength = this.aMenuItems.length;
	this.hasNext = function(){
		if((this.nPosition + 1) >= this.nLength){
			return false;
		}
		return true;
	};
	this.next = function(){
		this.nPosition = this.nPosition + 1;
		return this.aMenuItems[this.nPosition];
	};
	this._modifyPositionOnRemove = function(){
		if(this.nPosition >= this.nLength){
			this.nPosition = this.nLength -1;
		}
	};
	this.remove = function(){
		if(this.nPosition === -1){
			throw new Error("You can't remove an item until you've done at least one next()!");
		}		
		delete this.aMenuItems[this.nPosition];
		this.nLength = this.aMenuItems.length;
		this._modifyPositionOnRemove();
	};
};
