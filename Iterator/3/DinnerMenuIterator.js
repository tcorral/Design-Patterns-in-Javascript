var DinnerMenuIterator = function(oMenuItems) {
  this.oMenuItems = oMenuItems;
  Iterator.apply(this);
  this.nPosition = -1;
  this.nLength = 0;
  this.hasNext = function() {
    return (this.nPosition + 1) < this.nLength;
  };
  this.next = function() {
    this.nPosition = this.nPosition + 1;
    return this.oMenuItems[this.aKeys[this.nPosition]];
  };
  this._getKeys = function() {
    var aKeys = [];
    var sKey = '';
    for (sKey in this.oMenuItems) {
      if (this.oMenuItems.hasOwnProperty(sKey)) {
        aKeys.push(sKey);
        this.nLength = this.nLength + 1;
      }
    }
    return aKeys;
  };
  this.aKeys = this._getKeys();
};
