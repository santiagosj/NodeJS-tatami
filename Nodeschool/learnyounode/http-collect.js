const http = require('http')
let body = ''

http.get(process.argv[2], (res) => {
    //res.setEncoding('utf8')
    res.on('data', (data) => {
        body += data
    })
    res.on('end', () => {
        console.log(body.length)
        console.log(body)
    })
})