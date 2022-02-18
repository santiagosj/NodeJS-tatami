/*CALLBACKS*/

// const calcular = (n1, n2, operation) => {
//     return operation(n1, n2)
// }

// const add = (n1, n2) => n1 + n2;

// const result = calcular(3, 5, add);

// console.log(result);

/**Practica */
const booksDb = [
    {
        id: 1,
        title: "Clean Code",
        authorId: 1,
    },
    {
        id: 2,
        title: "The pragmatic programmer",
        authorId: 2,
    },
    {
        id: 3,
        title: "Web development with node.js",
        authorId: 3,
    },
];

const authorDb = [
    {
        id: 1,
        name: "Robert C. Martin",
    },
    {
        id: 2,
        name: "Steve Forest"
    }
]


function getBookById(id, callback) {
    const book = booksDb.find(b => b.id === id)

    if (!book) {
        const err = new Error();
        err.message = "Book not found"
        return callback(err)
    }

    callback(null, book)
}

/**CALLBACK HELL*/
function getAuthorById(id, callback) {
    const author = authorDb.find(a => a.id === id)

    if (!author) {
        const err = new Error();
        err.message = "Author not found"
        return callback(err)
    }

    callback(null, author)
}

getBookById(1, (err, book) => {
    if (err) {
        return console.log(err.message);
    }

    getAuthorById(book.authorId, (err, author) => {
        if (err) {
            return console.log(err.message);
        }

        console.log(`This book ${book.title} was written by ${author.name}`)
    })

    return console.log(book)
})
