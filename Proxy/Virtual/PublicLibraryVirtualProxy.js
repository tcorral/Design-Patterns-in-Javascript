var PublicLibraryVirtualProxy = function(catalog)
{
	// implements Library
	this.library = null;
	this.catalog = catalog;
	// Store the argument to the constructor.
};
PublicLibraryVirtualProxy.prototype =
{
	_initializeLibrary : function()
	{
		if(this.library === null)
		{
			this.library = new PublicLibrary(this.catalog);
		}
	},
	findBooks : function(searchString)
	{
		this._initializeLibrary();
		return this.library.findBooks(searchString);
	},
	checkoutBook : function(book)
	{
		this._initializeLibrary();
		return this.library.checkoutBook(book);
	},
	returnBook : function(book)
	{
		this._initializeLibrary();
		return this.library.returnBook(book);
	}
};
