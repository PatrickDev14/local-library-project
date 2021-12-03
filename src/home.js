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

/* for a count variable, */
function getMostCommonGenres(books) {}

/* return an array of book objects that are {name: book title, count: borrow arrays length}
let bookBorrows use map() to store these objects from books array;
return bookBorrows.sort() for bookBorrows by count;
learn slice() to limit to five book objects; the ending index is omitted from array, so 0-5 */
function getMostPopularBooks(books) {
  let bookBorrows = books.map((book) => {
    return { name: book.title, count: book.borrows.length };
});
  return bookBorrows.sort((a,b) =>
    (a.count < b.count ? 1: -1)).slice(0,5);
}


function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
