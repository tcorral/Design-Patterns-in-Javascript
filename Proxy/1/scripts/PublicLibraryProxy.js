import PublicLibrary from '../../common/PublicLibrary';

class PublicLibraryProxy {
  constructor(catalog = []) {
    this.library = new PublicLibrary(catalog);
  }

  findBooks(query) {
    console.log("Enter findBooks PublicLibraryProxy");
    return this.library.findBooks(query);
  }

  checkoutBook(book) {
    return this.library.checkoutBook(book);
  }

  returnBook(book) {
    return this.library.returnBook(book);
  }
}

export default PublicLibraryProxy;
