/* Requirements - */

//return 1 author object from authors array that matches id; use find()
function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

//return 1 book object from book array that matches id; use find()
function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {}

function getBorrowersForBook(book, accounts) {}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
