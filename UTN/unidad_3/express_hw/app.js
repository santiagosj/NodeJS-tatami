const express = require('express')
const app = express()

app.get('/',(req, res)=>{
    res.send(`Hola mundo express!`)
})

app.listen(8888,()=>{
    console.log('Servidor iniciado')
})