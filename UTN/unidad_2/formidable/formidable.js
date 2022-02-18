const http = require('http')
const url=require('url');
const fs=require('fs');
const formidable=require('formidable');

const mime = {
        'html' : 'text/html',
        'css'  : 'text/css',
        'jpg'  : 'image/jpg',
        'ico'  : 'image/x-icon',
        'mp3'  :	'audio/mpeg3',
        'mp4'  : 'video/mp4'
}



const upload = (req,res) => {
   let enterFormData = new formidable.IncomingForm();

   enterFormData.uploadDir='upload'

   enterFormData.parse(req)

   enterFormData.on('fileBegin',(field,file)=>{
     file.path = `unidad_2/formidable/public/upload/${file.name}`
   })

   enterFormData.on('end',()=>{
     res.writeHead(200, {'Content-Type': 'text/html'});
     res.write('<!doctype html><html><head></head><body>'+
     'Archivo subido<br><a href="index.html">Retornar</a></body></html>');	
     res.end()
   })
}

const list = (res) => {
    fs.readdir('unidad_2/formidable/public/upload/',(error,files)=>{

        var fotos='';

        for(var x=0;x<files.length;x++) {
			fotos += '<img src="upload/'+files[x]+'" style="max-width:250px;"><br>';
        }

        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write('<!doctype html><html><head></head><body>'+
        fotos+'<a href="index.html">Retornar</a></body></html>');
        res.end()
    })
}

const pathMaker = (req,res,path) => {
  switch (path) {
      case 'unidad_2/formidable/public/subir':{
          upload(req,res)
          break;
      }
      case 'unidad_2/formidable/public/listadofotos':{
          list(res)
          break;
      }
      default:{
         if(fs.existsSync(path)){
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

const server = http.createServer((req,res)=> {
    let urlObj = url.parse(req.url)
    let path = `unidad_2/formidable/public${urlObj.pathname}`
   try{
    if(path === 'unidad_2/formidable/public/') path = 'unidad_2/formidable/public/index.html'
    pathMaker(req, res, path)
   }catch(err){
       console.error(err)
   }
})

const port = 8888 || process.env.PORT

server.listen(port)

console.log(`Server running and listening: http://localhost:${port}/`);