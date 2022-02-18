const mysql = require('mysql')

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'basenode'
})

connection.connect((err)=>{
    if(err)console.log('Algo malió sal con mySql')
    else console.log('Conexión OK')
});

module.exports=connection