const express = require("express");
const server = express();

const { PORT } = require("./config");

server.listen(PORT, () => {
    console.log("El servidor está corriendo en el puerto " + PORT)
})