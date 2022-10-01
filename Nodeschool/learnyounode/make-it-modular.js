const filteredList = require('./mymodule')

filteredList(process.argv[2], process.argv[3], (err, files) => {
    if (err) {
        return console.error('Algo malio sal:', err)
    } else {
        files.forEach(file => {
            console.log(file);
        });
    }
})  