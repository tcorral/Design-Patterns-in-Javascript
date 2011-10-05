var PublicLibraryProxy = function(catalog)
{
	// implements Library
	this.library = new PublicLibrary(catalog);
};
PublicLibraryProxy.prototype =
{
	findBooks : function(searchString)
	{
		return this.library.findBooks(searchString);
	},
	checkoutBook : function(book)
	{
		return this.library.checkoutBook(book);
	},
	returnBook : function(book)
	{
		return this.library.returnBook(book);
	}
};
