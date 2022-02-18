const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// 1- especificamos el subdirectorio donde se encuentran las páginas estáticas
app.use(express.static(__dirname+'/public'));

/* 
2- a) enlazamos el modulo body-parser con Express llamando al método use y pasando lo que devuelve la función urlencoded
   b) extended: false significa que parsea solo string (no archivos de imagenes por ejemplo)
*/
app.use(bodyParser.urlencoded({extended:false}))

/**
 * 3- Cuando presionamos el botón 'submit' del formulario 
 * la propiedad action tiene el valor action="mostrarnumeros", 
 * esto hace que nuestro programa capture dicha ruta con el siguiente código.
 */

app.post('/mostrarnumeros',(req,res)=>{
    let num1 = req.body.numero1;
    let num2 = req.body.numero2;

    num1=parseInt(num1)
    num2=parseInt(num2)

    let page = '<!doctype html><html><head></head><body>'; 

    for(let x = num1; x <= num2; x++){
        page += '<a href="/mostrartabla?valor='+x+'">'+x+'</a>'+' - ';
    }
           
    page += '</body></html>';

    res.send(page)
    
})

/**
 * 4-Cuando el usuario presiona el hipervínculo se captura el path del mismo con el siguiente codigo
 */

app.get('/mostrartabla',(req,res)=>{
    let num = req.query.valor;
    num = parseInt(num)

    let page = '<!doctype html><html><head></head><body>';

    for(let x = 1; x <= 10; x++){
        let tabla = num * x
        page += num + ' * ' + x + ' = ' + tabla + '<br>';
    }

    page += '<a href="index.html">Retornar</a>';
    page += '</body></html>';
    res.send(page)

})

app.listen(8888,()=>{
    console.log('Servidor iniciado')
})