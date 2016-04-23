class PublicLibrary {
  constructor(books) {
    this.catalog = {};
    this.setCatalogFromBooks(books);
  }

  setCatalogFromBooks(books) {
    books.forEach(book => {
      this.catalog[book.getIsbn()] = {
        book: book,
        available: true
      };
    });
  }

  findBooks(query) {
    console.log("Enter findBooks PublicLibrary");
    let results = [];
    for(let book of this.catalog) {
      if (query.match(book.getTitle()) || query.match(book.getAuthor())) {
        results.push(book);
      }
    }
    return results;
  }

  checkoutBook(book) {
    let isbn = book.getIsbn();
    book = this.catalog[isbn];
    if(book) {
      if(book.available) {
        book.available = false;
        return book;
      } else {
        throw new Error('PublicLibrary: book ' + book.getTitle() + ' is not currently available.');
      }
    } else {
      throw new Error('PublicLibrary: book ' + book.getTitle() + ' not found.');
    }
  }

  returnBook(book) {
    let isbn = book.getIsbn();
    book = this.catalog[isbn];
    if(book) {
      book.available = true;
    } else {
      throw new Error('PublicLibrary: book ' + book.getTitle() + ' not found.');
    }
  }
}

export default PublicLibrary;
