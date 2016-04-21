var PublicLibraryProxy = function(aCatalog) {
  // implements Library
  this.oLibrary = new PublicLibrary(aCatalog);
};
PublicLibraryProxy.prototype.findBooks = function(sQueryString) {
  console.log("Enter findBooks PublicLibraryProxy");
  return this.oLibrary.findBooks(sQueryString);
};
PublicLibraryProxy.prototype.checkoutBook = function(oBookItem) {
  return this.oLibrary.checkoutBook(oBookItem);
};
PublicLibraryProxy.prototype.returnBook = function(oBookItem) {
  return this.oLibrary.returnBook(oBookItem);
};
