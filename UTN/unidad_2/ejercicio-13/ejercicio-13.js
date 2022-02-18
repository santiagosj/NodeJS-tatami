//FORMULARIOS//
const http = require('http')
const url = require('url')
const fs = require('fs')
const querystring = require('querystring');

const mime = {
    'html' : 'text/html',
    'css'  : 'text/css',
    'jpg'  : 'image/jpg',
    'ico'  : 'image/x-icon',
    'mp3'  : 'audio/mpeg3',
    'mp4'  : 'video/mp4'
}

const recover = (req, res) => {
     let info = ''

     req.on('data',(datosParciales)=>{
         info += datosParciales
     });
     req.on('end',()=>{
         let form = querystring.parse(info);
         res.writeHead(200, {'Content-Type': 'text/html'});
         let page = '<!doctype html><html><head></head><body>'+
         'Nombre de usuario:'+form['nombre']+'<br>'+
         'Clave:'+form['clave']+'<br>'+
         '<a href="index.html">Retornar</a>'+
         '</body></html>';
         res.end(page)
     })
}

const pathMaker = (req,res,path) => {
    console.log(path)

    switch (path) {
        case 'unidad_2/ejercicio-13/public/recuperardatos':
            recover(req, res)
            break;
    
        default: {
            if(fs.existsSync){
                fs.readFile(path,(err,data)=>{
                    if(err){
                        res.writeHead(500,{'Content-Type': 'text/plain'});
                        res.write('Algo malió sal')
                        res.end()
                    }else{
                        let vec = path.split('.');
                        let extension = vec[vec.length - 1]
                        let mimeFile = mime[extension]
            
                        res.writeHead(200,{'Content-Type': mimeFile})
                        res.write(data)
                        res.end()
                    }
                })
            }else{
                res.writeHead(404,{'Content-Type': 'text/html'})
                res.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>')
                res.end();
            }
        }
            break;
    }
}

const server = http.createServer((req,res)=>{
   let urlObj = url.parse(req.url)
   let path = `unidad_2/ejercicio-13/public${urlObj.pathname}`

   if(path === 'unidad_2/ejercicio-13/public/') path = 'unidad_2/ejercicio-13/public/index.html'
   pathMaker(req, res, path)
})

const port = 8888 || process.env.PORT

server.listen(port)

console.log(`Servidor web escuchando en http://localhost:${port}/`)