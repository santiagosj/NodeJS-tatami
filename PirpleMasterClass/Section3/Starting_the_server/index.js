const http = require('http')

const server = http.createServer((req, res)=>{
    res.end('Hola NodeJS!')
})

server.listen(3000,function(){
    console.log('servidor escuchando en el port 3000')
})