const http=require('http');
const url=require('url');
const fs=require('fs');
const querystring = require('querystring');

const mime = {
   'html' : 'text/html',
   'css'  : 'text/css',
   'jpg'  : 'image/jpg',
   'ico'  : 'image/x-icon',
   'mp3'  :	'audio/mpeg3',
   'mp4'  : 'video/mp4'
};

const readComment = (res) => {
   fs.readFile('unidad_2/ejercicio-14/public/visitas.txt',(err,data)=>{
       res.writeHead(200, {'Content-Type': 'text/html'});
       res.write('<!doctype html><html><head></head><body>');
       res.write(data)
       res.write('</body></html>');
       res.end();
   })
}

const recordInFile = (form) => {
   let data ='nombre:'+form['nombre']+'<br>'+
             'comentarios:'+form['comentarios']+'<hr>';
   
   fs.appendFile('unidad_2/ejercicio-14/public/visitas.txt',data,(error)=>{
       if(error){
           console.log(error)
       }
   })
}

const recordComment = (req, res) => {
   let info = ''
   req.on('data',(datosparciales)=>{
       info+=datosparciales
   });
   req.on('end',()=>{
       let form = querystring.parse(info)
       res.writeHead(200, {'Content-Type': 'text/html'});
       let page = '<!doctype html><html><head></head><body>'+
       'Nombre:'+form['nombre']+'<br>'+
       'Comentarios:'+form['comentarios']+'<br>'+
       '<a href="index.html">Retornar</a>'+
       '</body></html>';
       res.end(page)
       recordInFile(form)
   })
}

const pathMaker = (req, res, path) => {
    switch (path) {
        case 'unidad_2/ejercicio-14/public/cargar':
            {
                recordComment(req,res)
                break;
            }
        case 'unidad_2/ejercicio-14/public/leercomentarios':{
               readComment(res)
               break;
        }

        default:{
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
               });
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
    let path = `unidad_2/ejercicio-14/public${urlObj.pathname}`

    try{
        if(path === 'unidad_2/ejercicio-14/public/') path = 'unidad_2/ejercicio-14/public/index.html'
        pathMaker(req, res, path)
    }catch(err){
        console.log(err)
    }

})

const port = 8888 || process.env.PORT

server.listen(port)

console.log(`Servidor web escuchando en http://localhost:${port}/`)