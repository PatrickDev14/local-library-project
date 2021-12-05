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

/*use filter() over books array and some() over book.borrow array to find a Not Returned transactions for 
the account parameter
map() the book object, if book.authorId === author.id, to include the author object 
use find() for this task
*/
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
