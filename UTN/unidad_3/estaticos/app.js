const express = require('express')
const app = express()

//midleware use ( nivel de aplicación )

app.use(express.static(__dirname + '/public'));

app.listen(8888, ()=>{
    console.log('Servidor web iniciado')
})