var CafeMenuIterator = function(aMenuItems){
	this.aMenuItems = aMenuItems;
	Iterator.apply(this);
	this.nPosition = -1;
	this.nLength = this.aMenuItems.length;
	this.hasNext = function(){
		return (this.nPosition + 1) < this.nLength;
	};
	this.next = function(){
		this.nPosition = this.nPosition + 1;
		return this.aMenuItems[this.nPosition];
	};
};
