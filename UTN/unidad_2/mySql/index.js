const http = require('http')
const url = require('url')
const fs = require('fs')
const queryString = require('querystring')

const mySql = require('mysql')

const connection = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'basenode'
})

connection.connect((err)=>{
    if(err) throw err;
    console.log('Conectado!')
})

const mime = {
    'html' : 'text/html',
    'css'  : 'text/css',
    'jpg'  : 'image/jpg',
    'ico'  : 'image/x-icon',
    'mp3'  :  'audio/mpeg3',
    'mp4'  : 'video/mp4'
}

const create = (res) => {
    connection.query('drop table if exist articulos',(err, result)=>{
        if(err){
            console.error(err)
        }
    });
    connection.query('create table articulos (' + 
    'codigo int primary key auto_increment,'+
    'descripcion varchar(50),'+
    'precio float'+')',(err, result)=>{
            if(err){
                console.error(err)
                return;
            }
         }
      )
    res.writeHead(200,{'Content-Type': 'text/html'});  
    res.write('<!doctype html><html><head></head><body>'+
	         'Se creo la tabla<br><a href="index.html">Retornar</a></body></html>');		
	res.end();
}

const alta = ( req, res) => {
     let info = ''
     req.on('data',(datosparciales)=>{
         info+=datosparciales
     });
     req.on('end',()=>{
         let form = queryString.parse(info)
         let registro = {
             descripcion:form['descripcion'],
             precio:form['precio']
         }

         connection.query('insert into articulos set ?',registro,(err,result)=>{
             if(err){
                 console.error(err)
                 return;
             }
         });
         res.writeHead(200,{'Content-Type': 'text/html'}); 
         res.write('<!doctype html><html><head></head><body>'+
	                'Se cargo el articulo<br><a href="index.html">Retornar</a></body></html>');		
	     res.end();
     })
}

const listado = (res) => {
   connection.query('select codigo,descripcion,precio from articulos',(err,filas)=>{
       if(err){
           console.log('error en el listado')
           return;
       }
       res.writeHead(200,{'Content-Type': 'text/html'}); 
       let datos = '';

       for(var f=0;f<filas.length;f++){
            datos+='Codigo:'+filas[f].codigo+'<br>';
            datos+='Descripcion:'+filas[f].descripcion+'<br>';
            datos+='Precio:'+filas[f].precio+'<hr>';
       }
       
       res.write('<!doctype html><html><head></head><body>');
       res.write(datos)
       res.write('<a href="index.html">Retornar</a>')
       res.write('</body></html>')
       res.end();
   })
}

const consulta = (req, res) => {

    let info = ''
    
    req.on('data', (datosparciales) => {
        info+=datosparciales
    })

    req.on('end', ()=>{

        let form = queryString.parse(info)
        let dato =[form['codigo']]

        connection.query('select descripcion,precio from articulos where codigo=?', dato, (err, filas)=>{

            if(err){
                console.log('error en la consulta')
                return;
            }

            res.writeHead(200,{'Content-Type': 'text/html'}); 

            let datos = '';

            if (filas.length>0) {
				datos+='Descripcion:'+filas[0].descripcion+'<br>';
				datos+='Precio:'+filas[0].precio+'<hr>';
			} else {
				datos='No existe un artículo con dicho codigo.';
			}

            res.write('<!doctype html><html><head></head><body>');
            res.write(datos);
            res.write('<a href="index.html">Retornar</a>');
            res.write('</body></html>');
            res.end();    

        })
    })
}

const pathMaker = (req,res,path) => {
     switch (path) {
         case 'unidad_2/mySql/public/creartabla':{
             create(res)
             break;
         }
         case 'unidad_2/mySql/public/alta':{
            alta(req, res)
            break;
        }
        case 'unidad_2/mySql/public/listado':{
            listado(res)
            break;
        }
        case 'unidad_2/mySql/public/consultaporcodigo':{
            consulta(req,res)
            break;
        }
             
         default:{
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
             break;
     }
}

const server = http.createServer((req,res)=>{
    let urlObj = url.parse(req.url) 
    let path = `unidad_2/mySql/public${urlObj.pathname}`

    if(path == 'unidad_2/mySql/public/') path = 'unidad_2/mySql/public/index.html'
    try{
       pathMaker(req,res,path)
    }catch(err){
        console.log(err)
    }
})

const port = 8888 || process.env.PORT

server.listen(port)

console.log(`Servidor web escuchando en http://localhost:${port}/`)
