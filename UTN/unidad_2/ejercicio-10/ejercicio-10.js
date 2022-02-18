//SERVIDOR PAGINAS ESTATICAS
const http=require('http');
const url=require('url');
const fs=require('fs');

//console.log(process.argv)

const server = http.createServer((req, res)=>{

    const objUrl = url.parse(req.url, true);  
    console.log(objUrl.pathname);  

    try{
        
       const objUrl = url.parse(req.url)
      
       const path = 'unidad_2/ejercicio-10/static' + objUrl.pathname
       
       if(path === 'unidad_2/ejercicio-10/static/') path = 'unidad_2/ejercicio-10/static/index.html';

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
                   res.writeHead(200,{'Content-Type': 'text/html'})
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

const port = 8888 || process.env.PORT

server.listen(port)

console.log(`Server running and listening: http://localhost:${port}/`);