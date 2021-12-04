/* Requirements - this file uses methods: find(); sort(); filter(). 
And arrow functions. And ternary operator.*/

function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

//use sort() to return accounts array sorted alphabetically
//between 2 sort arguments, later alphabetical argument gets +1 to move account index later, use ternary
function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) =>
    accountA.name.last > accountB.name.last ? 1 : -1
  );
}

//declare a variable for storing acct ID, and variable for accumulating total borrows
//use forEach() over books array, and then also over borrows array
//when ID match is satisfied, then accumulate 1 borrows
function getTotalNumberOfBorrows(account, books) {
  const acctId = account.id;
  let totalBorrows = 0;
  books.forEach((book) =>
    book.borrows.forEach((borrow) => {
      if (acctId === borrow.id) totalBorrows++;
    })
  );
  return totalBorrows;
}

//CLEAN this
//for an account id, forEach(account) see if books.borrows.id === account.id && books.borrows.returned === false;
//only first books.borrows transaction matters?
//if book.authorId === author.id, 
//then shorthand a book object that includes author object from authors.js
//push new book object to new acctBorrows array

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter((book) =>
    book.borrows.some(curAcct => 
      curAcct.id === account.id && curAcct.returned === false))
      .map(book => { 
        let author = authors.find(author =>
          author.id === book.authorId)
          book.author = author; return book 
        })
}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
