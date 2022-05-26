const express = require("express");
const server = express();

const { PORT } = require("./config");
const { HomeRouter, AboutRouter, QuotesRouter } = require("./routes");
const { NotFoundMiddleware } = require("./middleware");

server.use(express.static("./public"));
server.use(express.json());

server.use('/', HomeRouter);
server.use('/', AboutRouter);
server.use('/', QuotesRouter);

server.use(NotFoundMiddleware);

server.listen(PORT, () => {
    console.log("El servidor está corriendo en el puerto " + PORT)
});