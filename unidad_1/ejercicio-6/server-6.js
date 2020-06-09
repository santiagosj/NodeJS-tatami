//recuperando datos de un formulario

const http = require('http');
const url = require('url');
const fs = require('fs');
const querystring = require('querystring');

const mime = {
  'html': 'text/html',
  'css'  : 'text/css',
  'jpg'  : 'image/jpg',
  'ico'  : 'image/x-icon',
  'mp3'  :	'audio/mpeg3',
  'mp4'  : 'video/mp4'
};

const servidor=http.createServer((req, res)=>{
  let objetourl = url.parse(req.url);
  let path = 'public' + objetourl.pathname;
  if (path=='public/') {
    path = 'public/index.html';
  }
  encaminar(req, res, path);
});

servidor.listen(8888);

function encaminar(req, res, path){
  console.log(path);

  switch (path) {
    case 'public/recuperardatos':{
         recuperar(req, res);
      break;
  }
  default:{
     fs.exists(path,(existe)=>{
       if (existe) {
         fs.readFile(path,(error, contenido)=>{
           if (error) {
             res.writeHead(500, {'Content-Type':'text/plain'});
             res.write('Error interno');
             res.end();
           }else {
             let vec = path.split('.');
             let extension = vec[vec.length-1];
             let mimeArchivo = mime[extension];

             res.writeHead(200, {'Content-Type': mimeArchivo});
             res.write(contenido);
             res.end();
           }
         });
       }else {
         res.writeHead(404, {'Content-Type':'text/html'});
         res.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>');
       }
     });
   }
 }
}

function recuperar(req, res) {
    let info = '';

    req.on('data',(datosparciales)=>{
      info += datosparciales;
    });
    req.on('end',()=>{
      let formulario = querystring.parse(info);
      res.writeHead(200, {'Content-Type':'text/html'});
      let pagina='<!doctype html><html><head></head><body>'+ 'Nombre de usuario: '+ formulario['nombre']+'<br>'+ 'Clave:'+ formulario['clave']+ '<br>' + '<a href = "index.html">Retornar</a>' +
       '</body></html>';
       res.end(pagina);
    })
}

console.log('Servidor iniciado');
