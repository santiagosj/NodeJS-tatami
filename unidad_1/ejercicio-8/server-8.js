//recuperar datos de una url (get)
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

const servidor = http.createServer((req, res)=>{
  let objetourl = url.parse(req.url);
  let path = 'unidad_1/ejercicio-8/public' +objetourl.pathname;
  if(path=='unidad_1/ejercicio-8/public/'){
    path='unidad_1/ejercicio-8/public/index.html';
  }
  encaminar(req,res,path);
});

servidor.listen(8888);

function encaminar (req,res,path){

 switch (path) {
   case 'public/listanumeros':{
     listar(req, res);
     break
   }
     case'public/listadotabla':{
      listarTablaMultiplicar(req, res);
      break;
     }

   default:{
     fs.exists(path,(existe)=>{
       if(existe){
         fs.readFile(path, (error,contenido)=>{
          if (error) {
            res.writeHead(500,{'Content-Type': 'text/plain'});
            res.write('Error en el servidor');
            res.end();
          } else {
            let vec = path.split('.');
            let extension = vec[vec.length-1];
            let mimeArchivo = mime[extension];
            res.writeHead(200,{'Content-Type': mimeArchivo});
            res.write(contenido);
            res.end();
          }
        });
      } else {
           res.writeHead(404, {'Content-Type': 'text/html'});
           res.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>');
           res.end();
        }
      });
    }
  }
}

function listar(req, res){
  let info = '' ;
  res.writeHead(200, {'Content-Type':'text/html'});
  let pagina = '<!doctype html><html><head></head><body>';
    for(let f = 1;f <= 20; f++){
  pagina+='<a href ="listadotabla?numero='+f+'">'+f+'</a><br>';
    }
    pagina+='</body></html>';
    res.end(pagina);
}

function listarTablaMultiplicar(req, res){
  let valor = url.parse(req.url, true).query.numero;
  res.writeHead(200, {'Content-Type':'text/html'});
  let pagina = '<!doctype html><html><head></head><body>';
  for(let f=1; f <= 10; f++){
    pagina+=valor+'*'+f+'='+(valor*f)+'<br>';
  }
  pagina+='</body></html>';
  res.end(pagina);
}

console.log('Servido web iniciado');
