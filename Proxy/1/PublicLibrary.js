var PublicLibrary = function(books)
{
	// implements Library
	this.catalog =
	{
	};
	for(var i = 0, len = books.length; i < len; i++)
	{
		this.catalog[books[i].getIsbn()] =
		{
			book : books[i],
			available : true
		};
	}
};
PublicLibrary.prototype =
{
	findBooks : function(searchString)
	{
		var results = [];
		for(var isbn in this.catalog)
		{
			if(!this.catalog.hasOwnProperty(isbn))
				continue;
			if(searchString.match(this.catalog[isbn].getTitle()) || searchString.match(this.catalog[isbn].getAuthor()))
			{
				results.push(this.catalog[isbn]);
			}
		}
		return results;
	},
	checkoutBook : function(book)
	{
		var isbn = book.getIsbn();
		if(this.catalog[isbn])
		{
			if(this.catalog[isbn].available)
			{
				this.catalog[isbn].available = false;
				return this.catalog[isbn];
			}
			else
			{
				throw new Error('PublicLibrary: book ' + book.getTitle() + ' is not currently available.');
			}
		}
		else
		{
			throw new Error('PublicLibrary: book ' + book.getTitle() + ' not found.');
		}
	},
	returnBook : function(book)
	{
		var isbn = book.getIsbn();
		if(this.catalog[isbn])
		{
			this.catalog[isbn].available = true;
		}
		else
		{
			throw new Error('PublicLibrary: book ' + book.getTitle() + ' not found.');
		}
	}
};
