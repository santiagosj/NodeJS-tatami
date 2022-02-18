var http=require('http');
var url=require('url');
var fs=require('fs');

var mime=require('mime');

var server = http.createServer((req, res)=>{

    var objUrl = url.parse(req.url, true);  
    console.log(objUrl.pathname);  

    try{
        
       var objUrl = url.parse(req.url)
      
       var path = 'unidad_2/ejercicio-16/static' + objUrl.pathname
       
       if(path === 'unidad_2/ejercicio-16/static/') path = 'unidad_2/ejercicio-16/static/index.html';

      //DEBBUGIN
       console.log( path ) //logs "static/index.html"

        if(fs.existsSync(path)){
           
           fs.readFile(path, (error, data) => {

               if(error){
                   res.writeHead(500,{'Content-Type':'text/plain'})
                   res.write('Something went wrong! 💩')
                   return res.end();
               }else{
                  // console.log(data)
                   var type = mime.getType(path)
                   console.log(type)
                   res.writeHead(200,{'Content-Type': type})
                   res.write(data)
                   return res.end();
               }

           })

       }else{  // <-- logs this else statement
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write('<!doctype html><html><head></head><body> Something went wrong! 💩 fs.existsSync = false </body></html>');        
            return res.end();
       }
       
    }catch(err){
        console.error(err)
    }
})

var port = 8888 || process.env.PORT

server.listen(port)

console.log(`Server running and listening: http://localhost:${port}/`);