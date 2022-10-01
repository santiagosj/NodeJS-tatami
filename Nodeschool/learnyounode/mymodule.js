const fs = require('fs')

function filteredList(path, extension, callback) {
    fs.readdir(path, 'utf8', (err, files) => {
        if (err) {
            return callback(err)
        } else {
            files = files?.filter(file => extension === file.split('.')[1])
            return callback(null, files)
        }
    })
}

module.exports = filteredList

