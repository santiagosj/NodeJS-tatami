const fs = require('fs')

fs.readdir(process.argv[2], 'utf8', (err, files) => {
    if (err) {
        console.log(err)
    } else {
        console.log(files.filter(file => process.argv[3] === file.split('.')[1]).join('\n'))
    }
})