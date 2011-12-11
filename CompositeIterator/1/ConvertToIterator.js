var ConvertToIterator = function(oObject, bStopAutoInit)
{
	if (typeof oObject === "undefined" || oObject === null)
	{
		return null;
	}

	this.nLastIndex = -1;

	this.aKeys = [];

	this.length = 0;

	this.aArray = oObject;

	this.bIsArray = this.isArray(this.aArray);

	if(!bStopAutoInit)
	{
		this._setKeysAndLength();
	}
};
ConvertToIterator.prototype.isArray = function(aArray)
{
	return Object.prototype.toString.call(aArray) === "[object Array]";
};
ConvertToIterator.prototype._setKeysAndLength = function()
{
	var sKey = '';

	if (this.bIsArray)
	{
		this.length = this.aArray.length;
	}else
	{
		for (sKey in this.aArray)
		{
			if (this.aArray.hasOwnProperty(sKey))
			{
				this.aKeys.push(sKey);
				this.length++;
			}
		}
		this.aKeys.sort();
	}
};
ConvertToIterator.prototype._getIndexArray = function()
{
	return this.nLastIndex;
};
ConvertToIterator.prototype._getIndexObject = function()
{
	return this.aKeys[this.nLastIndex];
};
ConvertToIterator.prototype.getIndex = function()
{
	if(this.bIsArray)
	{
		this.getIndex = this._getIndexArray;
	}else
	{
		this.getIndex = this._getIndexObject;
	}
	this._getIndexObject = this._getIndexArray = null;
	return this.getIndex();
};
ConvertToIterator.prototype._getCurrentArray = function()
{
	return this.aArray[this.nLastIndex];
};
ConvertToIterator.prototype._getCurrentObject = function()
{
	return this.aArray[this.aKeys[this.nLastIndex]];
};
ConvertToIterator.prototype.current = function()
{
	if (this.bIsArray)
	{
		this.current = this._getCurrentArray;
	}else
	{
		this.current = this._getCurrentObject;
	}

	return this.current();
};
ConvertToIterator.prototype.hasNext = function()
{
	return (this.nLastIndex + 1) < this.length;
};
ConvertToIterator.prototype.hasPrev = function()
{
	return (this.nLastIndex - 1) > -1;
};
ConvertToIterator.prototype._nextArray = function()
{
	if (this.hasNext())
	{
		return this.aArray[++this.nLastIndex];
	}
	return false;
};
ConvertToIterator.prototype._nextObject = function()
{
	if (this.hasNext())
	{
		return this.aArray[this.aKeys[++this.nLastIndex]];
	}
	return false;
};
ConvertToIterator.prototype.next = function()
{
	if(this.length === 0)
	{
		return false;
	}
	if (this.bIsArray)
	{
		this.next = this._nextArray;
		this._nextArray = null;
	}
	else
	{
		this.next = this._nextObject;
		this._nextObject = null;
	}
	return this.next();
};
ConvertToIterator.prototype._prevArray = function()
{
	if (this.hasPrev())
	{
		return this.aArray[--this.nLastIndex];
	}
	return false;
};
ConvertToIterator.prototype._prevObject = function()
{
	if (this.hasPrev())
	{
		return this.aArray[this.aKeys[--this.nLastIndex]];
	}
	return false;
};
ConvertToIterator.prototype.prev = function()
{
	if(this.length === 0)
	{
		return false;
	}
	if (this.bIsArray)
	{
		this.prev = this._prevArray;
		this._prevArray = null;
	}
	else
	{
		this.prev = this._prevObject;
		this._prevObject = null;
	}
	return this.prev();
};
ConvertToIterator.prototype.movePointerTo = function(nIndex)
{
	if(nIndex > -1 && nIndex < this.length)
	{
		this.nLastIndex = nIndex;
	}
};
ConvertToIterator.prototype.startPosition = function()
{
	this.movePointerTo(0);
};
ConvertToIterator.prototype.endPosition = function()
{
	this.movePointerTo(this.length);
};
ConvertToIterator.prototype.first = function()
{
	this.startPosition();
	return this.current();
};
ConvertToIterator.prototype.last = function()
{
	this.endPosition();
	return this.current();

};