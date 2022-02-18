const http = require('http')
const url = require('url')

const server = http.createServer((req,res)=>{
    let objUrl = url.parse(req.url)
    try{
       console.log(`path completo del recurso y parametros ${objUrl.path}`)
       console.log(`solo el path y el recurso  ${objUrl.pathname}`)
       console.log(`Parametros del recurso: ${objUrl.query}`)
       res.writeHead(200,{'Content-Type': 'text/html'})
       res.write('<!doctype html><html><head></head><body>Hola mundo</body></html>')
       res.end()
    }catch(err){
        console.error(err)
    }
})

var port = 8888

server.listen(port)

console.log(`Server running and listening: http://localhost:${port}/`);