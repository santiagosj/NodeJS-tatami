//Servicio de paginas estaticas

const http = require('http');
const url = require('url');
const fs = require('fs');

const servidor = http.createServer((req, res)=>{

  let objetourl = url.parse(req.url);

  let path = 'static'+objetourl.pathname;

  if (path=='static/') {
    path='static/index.html';
  }

   fs.exists(path,(existe)=>{
     if (existe) {
       fs.readFile(path, (error, contenido)=>{
         if (error) {
             res.writeHead(500,{'Content-Type':'text/plain'});
             res.write('Error en el servidor');
             res.end();
         }else {
           res.writeHead(200, {'Content-Type':'text/html'});
           res.write(contenido);
           res.end();
         }
       });
     } else {
       res.writeHead(404, {'Content-Type':'text/html'});
       res.write('<!doctype html><html><head></head><body>El reurso no existe o no fue encontrado</body></html>');
       res.end();
     }
   });
});

servidor.listen(8888);

console.log('Servidor web iniciado');
