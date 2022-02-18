const express = require('express')
const router = express.Router()

const bd = require('./bd')
//=========================================================================
//crear tabla
router.get('/creartabla',(req,res,next)=>{
    bd.query('drop table if exists articulos',(err,result)=>{
        if(err){
            console.log(err)
            return;
        }
    });
    bd.query('create table articulos ('+
    'codigo int primary key auto_increment,'+
    'descripcion varchar(50),'+
    'precio float'+
 ')', (err, result)=>{
     if(err){
         console.log(err)
         return
     }
 });
 res.render('mensajearticulos',{mensaje:'La tabla se creó correctamente'})
});

//=========================================================================
//alta de registros
router.get('/alta',(req,res,next)=>{
    res.render('altaarticulos')
})

router.post('/alta',(req,res,next)=>{
    let registro = {
          descripcion:req.body.descripcion,
          precio:req.body.precio
    }
    bd.query('insert into articulos set ?', registro,(err,result)=>{
          if(err){
              console.log(err) 
              return 
          }
    });
    res.render('mensajearticulos',{mensaje:'La carga se efectuó correctamente'})
})

//========================================================================
//Listado de registros
//Capturamos la ruta articulos/listado. Recuperamos los datos de la tabla sql y se los pasamos a la plantilla listararticulos.hbs
router.get('/listado',(req,res,next)=>{
    bd.query('select codigo,descripcion,precio from articulos',(err,filas)=>{
        if(err){
            console.log('error en el listado')
            return;
        }
        res.render('listararticulos',{articulos:filas})
    })
});

//consluta 
router.get('/consulta',(req,res,next)=>{
    res.render('consultaarticulos')
})

router.post('/consulta',(req,res,next)=>{
     bd.query('select descripcion,precio from articulos where codigo=?', req.body.codigo, (err,filas)=>{
         if(err){
             console.log('error en la consulta')
             return;
         }
         if(filas.length > 0){
             res.render('listadoconsulta',{articulos:filas})     
         }else{
             res.render('mensajearticulos',{mensaje:'No existe el codigo del articulo'})
         }
     })
})

//modificacion
router.get('/modificacion',(req,res,next)=>{
    res.render('consultamodificacion')
})

router.post('/modificar',(req,res,next)=>{
    bd.query('select descripcion,precio,codigo from articulos where codigo=?',req.body.codigo,(err,filas)=>{
        if(err){
            console.log('error en la consulta')
            return 
        }
        if(filas.length > 0){
            res.render('formulariomodifica',{articulos:filas});
        }else{
            res.render('mensajearticulos',{mensaje:'El codigo solicitado no existe'})
        }
    })
})

router.post('/confirmarmodifica', (req,res,next)=>{
    let requistro = {
        descripcion:req.body.descripcion,
        precio:req.body.precio
    }
    bd.query('UPDATE articulos SET ? WHERE ?',[requistro,{codigo:req.body.codigo}],(err,filas)=>{
        if(err){
            console.log('error en la consulta')
            console.log(err)
            return;
        }
        res.render('mensajearticulos',{mensaje:'El articulo fue modificado con exito'})
    })
})

module.exports = router;