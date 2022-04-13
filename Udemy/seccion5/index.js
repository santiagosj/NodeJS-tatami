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


// function getBookById(id, callback) {
//     const book = booksDb.find(b => b.id === id)

//     if (!book) {
//         const err = new Error();
//         err.message = "Book not found"
//         return callback(err)
//     }

//     callback(null, book)
// }

// /**CALLBACK HELL*/
// function getAuthorById(id, callback) {
//     const author = authorDb.find(a => a.id === id)

//     if (!author) {
//         const err = new Error();
//         err.message = "Author not found"
//         return callback(err)
//     }

//     callback(null, author)
// }

// getBookById(1, (err, book) => {
//     if (err) {
//         return console.log(err.message);
//     }

//     getAuthorById(book.authorId, (err, author) => {
//         if (err) {
//             return console.log(err.message);
//         }

//         console.log(`This book ${book.title} was written by ${author.name}`)
//     })

//     return console.log(book)
// })

/**PROMISES*/

// function executor(resolve, reject){
//    // si funciona
//    resolve();
//    // si falla
//    reject();
// }

// const propise = new Promise(executor);

/**PROMISES*/

// function getBookById(id) {
//     return new Promise((resolve, reject) => {
//         const book = booksDb.find(b => b.id === id)

//         if (!book) {
//             const err = new Error();
//             err.message = "Book not found"
//             reject(err)
//         }
//         resolve(book)
//     })
// }


// function getAuthorById(id) {

//     return new Promise((resolve, reject) => {
//         const author = authorDb.find(a => a.id === id)
//         if (!author) {
//             const err = new Error();
//             err.message = "Author not found"
//             reject(err)
//         }
//         resolve(author)
//     })
// }

// getBookById(1)
//     .then((book) => {
//         return getAuthorById(book.id);
//     }).then((author) => {
//         console.log(author);
//     }).catch(error => {
//         console.error(error)
//     })

/**
 * 
 *La expresión await provoca que la ejecución de una función async sea pausada hasta que una Promise sea terminada o rechazada, y regresa a la ejecución de la función async después del término. Al regreso de la ejecución, el valor de la expresión await es la regresada por una promesa terminada.
 */

async function getBookById(id) {
    const book = booksDb.find(book => book.id === id);
    if (!book) {
        const error = new Error();
        error.message = "Book not found!"
        throw error;
    }
    return book;
}
async function getAuthorById(id) {
    const author = authorDb.find(author => author.id === id);
    if (!author) {
        const error = new Error();
        error.message = "Author not found!";
        throw error;
    }
    return author;
}
async function main(id) {
    try {
        const book = await getBookById(id);
        const author = await getAuthorById(book.authorId);
        console.log(`This book ${book.title} was written by ${author.name}`);
    } catch (err) {
        console.log(err.message)
    }
}

main(1);
main(5);
