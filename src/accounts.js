/* Requirements - this file uses methods: find(); sort(); filter(). 
And arrow functions. */

function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);  
}

function sortAccountsByLastName(accounts) {
  //use sort method
  return accounts.sort((accountA, accountB) =>
    //later alphabetical argument gets +1 to move account index later
    accountA.name.last > accountB.name.last ? 1 : -1
  );
}

//declare a variable for storing acct ID, and accumulating total borrows
//use forEach() over books array, and then also borrows array
//when ID match is satisfied, then accumulate borrows
function getTotalNumberOfBorrows(account, books) {
  const acctId = account.id;
  let totalBorrows = 0;
  books.forEach(book => book.borrows.forEach(borrow => {
    if (acctId === borrow.id) totalBorrows++;
  }));
  return totalBorrows;
}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
