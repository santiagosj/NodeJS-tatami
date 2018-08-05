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
};

const cache={};

const servidor = http.createServer((req, res)=>{
  let objetourl = url.parse(req.url);
  let path = 'static' + objetourl.pathname;

  if (path == 'static/') {
    path = 'static/index.html';
  }

   if (cache[path]) {
      let vec = path.split('.');
      let extension = vec[vec.length-1];
      let mimeArchivo = mime[extension];

      res.writeHead(200,{'Content-Type': mimeArchivo});
      res.write(cache[path]);
      res.end();
      console.log('Recurso recuperado del cache: ' + path);
   } else {
     fs.exists(path,(existe)=>{
       if (existe) {
         fs.readFile(path, (error, contenido)=>{
            if (error) {
              res.writeHead(500, {'Content-Type': 'text/plain'});
              res.write('Error en el servidor');
              res.end();
            }else {
              cache[path]=contenido;
              let vec = path.split('.');
              let extension = vec[vec.length-1];
              let mimeArchivo = mime[extension];

              res.writeHead(200, {'Content-Type': mimeArchivo});
              res.write(contenido);
              res.end()
              console.log('Recurso leido del disco: ' + path);
            }
         });
       } else {
         res.writeHead(404, {'Content-Type': 'text/html'});
         res.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>');
         res.end();
       }
     });
   }
});

servidor.listen(8888);

console.log('Servidor web iniciado!');
