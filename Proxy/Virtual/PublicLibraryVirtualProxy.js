var PublicLibraryVirtualProxy = function(aCatalog)
{
	// implements Library
	this.oLibrary = null;
	this.aCatalog = aCatalog;
	// Store the argument to the constructor.
};
PublicLibraryVirtualProxy.prototype._initializeLibrary = function()
{
	if(this.oLibrary === null)
	{
		this.oLibrary = new PublicLibrary(this.aCatalog);
	}
};
PublicLibraryVirtualProxy.prototype.findBooks = function(sQueryString)
{
	console.log("Enter findBooks PublicLibraryVirtualProxy");
	this._initializeLibrary();
	return this.oLibrary.findBooks(sQueryString);
};
PublicLibraryVirtualProxy.prototype.checkoutBook = function(oBookItem)
{
	this._initializeLibrary();
	return this.oLibrary.checkoutBook(oBookItem);
};
PublicLibraryVirtualProxy.prototype.returnBook = function(oBookItem)
{
	this._initializeLibrary();
	return this.oLibrary.returnBook(oBookItem);
};
