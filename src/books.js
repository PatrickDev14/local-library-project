/* Requirements - this file uses methods: filter(), some(), every(), map();  
    uses spread operator;
    declares and uses helper function 'booksNotReturned' 
    */

//return 1 author object from authors array that matches id; use find()
function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

//return 1 book object from book array that matches id; use find()
function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

/*This helper function returns an array of unreturned books, by looking over each books.borrows
array with filter() and some() methods.
*/
function booksNotReturned(books) {
  //filter() books into a new array that are Not Returned
  return books.filter((book) =>
    //some() method looks over book.borrows array, and one returned === false means book is Not Returned
    book.borrows.some((borrow) => borrow.returned === false)
  );
}
/*filter the books array into 2 arrays. for 1)books.borrows[i].returned: has a false;
can use the helper function 'booksNotReturned' from line 19;
 and for 2) books.borrows[i].returned: are all true - these are returnedBooks;
 then return 2 arrays inside 1, can use the spread operator when combining them;
declare variables for new arrays
*/
function partitionBooksByBorrowedStatus(books) {
  //declare notReturned; use helper function booksNotReturned to build array of unreturned books
  var notReturned = booksNotReturned(books);
  //filter() books to build array of returnedBooks
  let returnedBooks = books.filter((book) =>
    //every() looks over book.borrows array for every returned === true
    book.borrows.every((borrow) => borrow.returned === true)
  );
  return [[...notReturned], [...returnedBooks]];
}

/* get an account id from a book.borrows transaction
use find() -return account object matching  the account id, like book.borrows.id === account.id
use map() - return object reformatting the borrows transaction like {...borrows transaction, ...account}
slice the returned array to the first 10 objects
 */
function getBorrowersForBook(book, accounts) {
  return book.borrows.map((borrow) => {
    let accountMatch = accounts.find((account) =>
    account.id === borrow.id
    );
    return {...borrow, ...accountMatch};
  }).slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
  booksNotReturned,
};
