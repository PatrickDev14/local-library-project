/* Requirements - uses methods: filter(), some(), every();  
    uses spread operator;
    declares and uses helper function 'booksNotReturned' */

//return 1 author object from authors array that matches id; use find()
function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

//return 1 book object from book array that matches id; use find()
function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

/*This helper function returns an array of unreturned books, by looking over each books.borrows
array with filter() and some() methods. */
function booksNotReturned(books) {
  //filter() books into a new array that are Not Returned
  return books.filter((book) =>
  //some() method looks over book.borrows array, and one returned === false means book is Not Returned
    book.borrows.some((borrow) => borrow.returned === false)
    );
}
/*filter the books array into 2 arrays. for 1)books.borrows[i].returned: has a false;
can use the helper function 'booksNotReturned' from line 17;
 and for 2) books.borrows[i].returned: are all true - these are returnedBooks;
 then return 2 arrays inside 1, can use the spread operator when combining them;
declare variables for new arrays
**great struggle initially, since while looking at function-instructions.md, I was only seeing
books.borrows objects only having 1 'returned: value' -- look at all the data !!
*/
function partitionBooksByBorrowedStatus(books) {
  //declare notReturned; use helper function booksNotReturned to build array of unreturned books
  var notReturned = booksNotReturned(books);
  //filter() books into books that are returned
  let returnedBooks = books.filter((book) =>
  //every() looks over book.borrows array for every return === true
    book.borrows.every((borrow) => borrow.returned === true)
    );
  return [[...notReturned], [...returnedBooks]];  
}

function getBorrowersForBook(book, accounts) {}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
  booksNotReturned,
};
