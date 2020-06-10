const http = require('http');
const url = require('url');
const fs = require('fs');

const mime = {
    'html' : 'text/html',
    'css'  : 'text/css',
    'jpg'  : 'image/jpg',
    'ico'  : 'image/x-icon',
    'mp3'  :	'audio/mpeg3',
    'mp4'  : 'video/mp4'
}

const list = (req, res) => {
   let info = ''
   res.writeHead(200,{'Content-Type': 'text/html'})
   let page = '<!doctype html><html><head></head><body>';
   for(let i = 1;i<=20;i++){
      page+='<a href="listadotabla?numero='+i+'">'+i+'</a><br>';
   }
   page+='</body></html>';
   res.end(page)
}

const listTable = (req, res) => {
   let value = url.parse(req.url, true).query.numero;
   res.writeHead(200,{'Content-Type': 'text/html'});
   let page = '<!doctype html><html><head></head><body>';
   for(let i = 1;i<=10;i++ ){
       page+=value+'*'+i+'='+(value*i)+'<br>'
   }
   page+='</body></html>';
   res.end(page)
}

const pathMaker = (req, res, path) => {
   switch (path) {
       case 'unidad_2/ejercicio-15/public/listanumeros':{
            list(req,res)
            break;
       }
       case 'unidad_2/ejercicio-15/public/listadotabla':{
           listTable(req, res)
           break;
       }
       default: {
           if(fs.existsSync){
               fs.readFile(path,(err,data)=>{
                   if(err){
                       res.writeHead(500,{'Content-Type': 'text/plain'})
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

   }
}

const server = http.createServer((req,res)=>{
    let urlObj = url.parse(req.url)
    let path = `unidad_2/ejercicio-15/public${urlObj.pathname}`

    try{
        if(path === 'unidad_2/ejercicio-15/public/') path = 'unidad_2/ejercicio-15/public/index.html'
        pathMaker(req, res, path)
    }catch(err){
        console.error(err)
    }
})

const port = 8888 || process.env.PORT

server.listen(port)

console.log(`Servidor web escuchando en http://localhost:${port}/`)