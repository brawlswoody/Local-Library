// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((bookId) => bookId.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let totalBooks = [];
  let booksOut = [];
  let booksIn = [];
  books.forEach((book) => {
    const borrowed = book.borrows;
    const isBorrowed = borrowed.some((position) => position.returned === false);
    if (isBorrowed) {booksOut.push(book);} else {booksIn.push(book);}
  });
  return (totalBooks = [booksOut, booksIn]);
}

function getBorrowersForBook({ borrows }, accounts) {
  let borrowers = [];
  borrows.forEach((borrow) => {
  const borrower = accounts.find((account) => account.id === borrow.id);
    borrower.returned = borrow.returned;
    if (borrowers.length < 10) borrowers.push(borrower);
  });

  return borrowers;
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
