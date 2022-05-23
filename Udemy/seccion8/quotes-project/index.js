const express = require("express");
const server = express();

const { PORT } = require("./config");
const { HomeRouter } = require("./routes");

server.use(express.static("./public"));
server.use(express.json());

server.use('/', HomeRouter)

server.listen(PORT, () => {
    console.log("El servidor está corriendo en el puerto " + PORT)
})