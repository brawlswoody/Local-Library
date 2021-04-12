// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id)
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => accountA.name["last"] > accountB.name["last"] ? 1 : -1 );
  return accounts;
};

function getTotalNumberOfBorrows(account, books) {
let total = 0;
  books.forEach(book => {
    book.borrows.forEach(borrow => {
      if(borrow.id === account.id)
        total += 1
    })
  })
  return total
}

function getBooksPossessedByAccount(account, books, authors) {
  let checkedOutBooks = books.filter((book) => { 
    return book.borrows.some((borrow) => { 
      return borrow.id === account.id && !borrow.returned; 
    });
  });
  let results = [];
  checkedOutBooks.forEach((book) => {
    let author = authors.find((author) => author.id === book.authorId);
    let bookCopy = { ...book }; 
    bookCopy.author = author;
    results.push(bookCopy);
  });
  return results;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
