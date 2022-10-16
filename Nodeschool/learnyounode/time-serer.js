const net = require('net')

function zeroFill(i) {
    return (i < 10 ? '0' : '') + i
}

function now() {
    let date = new Date()
    return date.getFullYear() + '-'
        + zeroFill(date.getMonth() + 1) + '-'
        + zeroFill(date.getDate() + '') + ' '
        + zeroFill(date.getHours() + '') + ':'
        + zeroFill(date.getMinutes() + '')
}


const server = net.createServer((socket) => {
    socket.end(now() + '\n')
})

server.listen(process.argv[2])

