var CafeMenuIterator = function(aMenuItems){
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
};
