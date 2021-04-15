// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
    return books.length;
}

function getTotalAccountsCount(accounts) {
    return accounts.length;
}

function getBooksBorrowedCount(books) {
    const borrowed = books.filter((book) => book.borrows[0].returned === false);
    return borrowed.length;
}

function getMostCommonGenres(books) {
    let genre = {};
    books.forEach(num => { if (genre[num.genre]) { genre[num.genre]++; } else { genre[num.genre] = 1; } });
    return Object
        .entries(genre)
        .map(([name, count]) => {
            return { name, count };
        })
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);
}

function getMostPopularBooks(books) {
    let map = {};
    books.forEach(book => {
        map[book.title] = book.borrows.length;
    });
    return Object.entries(map).map(([name, count]) => {
        return { name, count };
    }).sort((a, b) => b.count - a.count).slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
    let finalArr = [];
    authors.forEach(author => {
        finalArr.push({ name: author.name.first + " " + author.name.last, count: 0, id: author.id });
    });

    books.forEach((book) => {
        let foundAuthor = finalArr.find((author) => {
            return author.id === book.authorId;
        });
        foundAuthor.count += book.borrows.length;
    });

    return finalArr.sort((authorA, authorB) =>
        authorB.count - authorA.count).slice(0, 5).map(({ id, ...rest }) => rest);
}

module.exports = {
    getTotalBooksCount,
    getTotalAccountsCount,
    getBooksBorrowedCount,
    getMostCommonGenres,
    getMostPopularBooks,
    getMostPopularAuthors,
};