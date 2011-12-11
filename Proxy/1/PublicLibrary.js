var PublicLibrary = function(aBooks)
{
	// implements Library
	this.oCatalog =
	{
	};

	this.setCatalogFromBooks(aBooks);
};
PublicLibrary.prototype.setCatalogFromBooks = function(aBooks)
{
	var nBook = 0;
	var nLenBooks = aBooks.length;
	var oBook = null;

	for(; nBook < nLenBooks; nBook++)
	{
		oBook = aBooks[nBook];
		this.oCatalog[oBook.getIsbn()] =
		{
			book: oBook,
			available: true
		};
	}
	nBook = nLenBooks = oBook = null;
};
PublicLibrary.prototype.findBooks = function(sQueryString)
{
	console.log("Enter findBooks PublicLibrary");
	var aResults = [];
	var sIsbn = '';
	var oBook = null;
	for(sIsbn in this.oCatalog)
	{
		if(!this.oCatalog.hasOwnProperty(sIsbn))
		{
			continue;
		}
		oBook = this.oCatalog[sIsbn];
		if(sQueryString.match(oBook.getTitle()) || sQueryString.match(oBook.getAuthor()))
		{
			aResults.push(oBook);
		}
	}
	return aResults;
};
PublicLibrary.prototype.checkoutBook = function(oBookItem)
{
	var sIsbn = oBookItem.getIsbn();
	var oBook = this.oCatalog[sIsbn];
	if(oBook)
	{
		if(oBook.available)
		{
			oBook.available = false;
			return oBook;
		}
		else
		{
			throw new Error('PublicLibrary: book ' + oBookItem.getTitle() + ' is not currently available.');
		}
	}
	else
	{
		throw new Error('PublicLibrary: book ' + oBookItem.getTitle() + ' not found.');
	}
};
PublicLibrary.prototype.returnBook = function(oBookItem)
{
	var sIsbn = oBook.getIsbn();
	var oBook = this.oCatalog[sIsbn];
	if(oBook)
	{
		oBook.available = true;
	}
	else
	{
		throw new Error('PublicLibrary: book ' + oBookItem.getTitle() + ' not found.');
	}
};
