// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
    return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
    return books.find((bookId) => bookId.id === id);
}

function partitionBooksByBorrowedStatus(books) {
    let totalBooks = [];
    let booksOut = [];
    let booksIn = [];
    books.forEach((book) => {
        const borrowed = book.borrows;
        const isBorrowed = borrowed.some((position) => position.returned === false);
        if (isBorrowed) { booksOut.push(book); } else { booksIn.push(book); }
    });
    return (totalBooks = [booksOut, booksIn]);
}
// helper function 

function findAccountById(accounts, id) {
    return accounts.find((account) => account.id === id);
}

function getBorrowersForBook(book, accounts) {
    return book.borrows.map(borrow => {
        let account = findAccountById(accounts, borrow.id);
        account.returned = borrow.returned;
        return account;
    }).slice(0, 10);
}




module.exports = {
    findAuthorById,
    findBookById,
    partitionBooksByBorrowedStatus,
    getBorrowersForBook,
};