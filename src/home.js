/* Requirements - this file uses helper function 'booksNotReturned';
    uses methods: map(), reduce() */

//require the helper function booksNotReturned from books.js file
const {booksNotReturned} = require("./books");

/*chooseTopFive is a helper function with an array parameter, that sorts
the array by the count value, and uses slice() to return an array with the 
first 5 objects of the sorted array */
function chooseTopFive(array) {
  return array.sort((a,b) =>
    (a.count < b.count ? 1: -1)).slice(0,5);
}

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
//use reduce() and accumulate the results where book.borrows.returned === false
function getBooksBorrowedCount(books) {
  let borrowed = books.reduce((result, book) => {
    for (let i=0; i < book.borrows.length; i++) {
      if (book.borrows[i].returned === false) {
        result++;
      }
    }
    return result;
  }, 0)
  return borrowed;   
}

/* return an array of genre objects that are {name: book.genre, count: filter(books).length} 
 */
function getMostCommonGenres(books) {}

/* return an array of book objects that are {name: book title, count: borrow arrays length}
let bookBorrows use map() to store these objects from books array;
return bookBorrows.sort() for bookBorrows by count;
learn slice() to limit to five book objects; the ending index is omitted from array, so 0-5 */
function getMostPopularBooks(books) {
  let bookBorrows = books.map((book) => {
    return { name: book.title, count: book.borrows.length };
});
  return chooseTopFive(bookBorrows);
}

/*return a sliced array with the 5 authors who have the most read books in total
build first array with objects like { name: "author name", count: 0} -- not counting reads yet
build second array when author.id is in the book object, and add the book.borrows.length to 'count'
return array with top 5 authors using 'function chooseTopFive' */
function getMostPopularAuthors(books, authors) {
  let authorsReads = [];
  authors.forEach((author) => {
    let authorX = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
    };
    books.forEach((book) => {
    if (book.authorId === author.id) {
      authorX.count += book.borrows.length;
    }
  });
  authorsReads.push(authorX);
  });
  return chooseTopFive(authorsReads);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
  chooseTopFive,
};
