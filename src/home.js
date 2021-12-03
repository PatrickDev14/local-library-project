/* Requirements - uses helper function 'booksNotReturned'*/

//require the helper function booksNotReturned from books.js file
const {booksNotReturned} = require("./books");


//return the number of book objects inside the books array; use .length
//should return zero if the array is empty
function getTotalBooksCount(books) {
  return books.length;
}

//return the number of account objects in the accounts array; use .length
//should return zero if the array is empty
function getTotalAccountsCount(accounts) {
  return accounts.length;
}

//return number of books currently checked out where a books.borrows.returned === false
//we can return .length of the array of unreturned books from the helper function 'booksNotReturned'
function getBooksBorrowedCount(books) {
  return booksNotReturned(books).length;  
}

function getMostCommonGenres(books) {}

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
