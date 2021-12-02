/* Requirements - uses methods: filter(), some(), every()  
    uses spread operator */

//return 1 author object from authors array that matches id; use find()
function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

//return 1 book object from book array that matches id; use find()
function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

/*filter the books array into 2 arrays. for 1)books.borrows[i].returned: has a false;
 and for 2) books.borrows[i].returned: are all true - these are returnedBooks;
 then return 2 arrays inside 1, can use the spread operator when combining them;
declare variables for new arrays
*/
function partitionBooksByBorrowedStatus(books) {
  //filter() books into books that are NotReturned
  let booksNotReturned = books.filter((book) =>
  //some() helper function looks over book.borrows array, and one returned === false means book is NotReturned
    book.borrows.some((borrow) => borrow.returned === false)
    );
  //filter() books into books that are returned
  let returnedBooks = books.filter((book) =>
  //every() looks over book.borrows array for every return === true
    book.borrows.every((borrow) => borrow.returned === true)
    );
  return [[...booksNotReturned], [...returnedBooks]];  
}

function getBorrowersForBook(book, accounts) {}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
