/* Requirements - */

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


function getBooksBorrowedCount(books) {}

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
