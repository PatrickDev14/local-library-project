/* Requirements - this file uses helper function 'chooseTopFive';
    uses methods: map(), reduce() */


/*chooseTopFive is a helper function with an array parameter, that sorts
the array by the 'count' value, and uses slice() to return an array with the 
first 5 objects of the sorted array; the ending index is omitted from array, so 0-5 */
function chooseTopFive(array) {
  return array.sort((a, b) => (a.count < b.count ? 1 : -1)).slice(0, 5);
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

//return number of books currently checked out where criteria books.borrows.returned === false
//use reduce() and accumulate the results where book.borrows.returned === false
function getBooksBorrowedCount(books) {
  let borrowed = books.reduce((result, book) => {
    for (let i = 0; i < book.borrows.length; i++) {
      if (book.borrows[i].returned === false) {
        result++;
      }
    }
    return result;
  }, 0);
  return borrowed;
}

/* return a sliced array of genre objects that are {name: book.genre, count}
for each occurrence of a genre, accumulate in the count value;
if it's first occurrence of genre, add it to the array;
use map to return objects {name, count} in a genreArr of equal length;
return array with top 5 genres using 'function chooseTopFive' */
function getMostCommonGenres(books) {
  let genreCount = {};
    books.forEach((book) => {
      if (genreCount[book.genre]) {
        genreCount[book.genre]++;
      } else {
        genreCount[book.genre] = 1;
      }
    });
    let genreArr =  Object.entries(genreCount).map(([name, count]) => {
      return {name, count};
    });
  return chooseTopFive(genreArr);    
}

/* return a sliced array of book objects that are {name: book title, count: .borrow arrays length}
let bookBorrows use map() to store these objects from books array;
return array with top 5 books using 'function chooseTopFive' */
function getMostPopularBooks(books) {
  let bookBorrows = books.map((book) => {
    return { name: book.title, count: book.borrows.length };
  });
  return chooseTopFive(bookBorrows);
}

/*return a sliced array with the 5 authors who have the most read books in total
build first array with objects like { name: "author name", count: 0} -- not counting reads yet;
build second array when author.id is in the book.authorId value, and add the book.borrows.length to 'count'
return array with top 5 authors using 'function chooseTopFive' */
function getMostPopularAuthors(books, authors) {
  let authorsRead = [];
  authors.forEach((author) => {
    let authorX = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0,
    };
    books.forEach((book) => {
      if (book.authorId === author.id) {
        authorX.count += book.borrows.length;
      }
    });
    authorsRead.push(authorX);
  });
  return chooseTopFive(authorsRead);
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
