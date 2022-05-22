const express = require('express');
const server = express();
const fs = require("fs");

const home = fs.readFileSync("./index.html");
const about = fs.readFileSync("./about.html");

server.get("/", getHomePage);
server.get("/about", (req, res) => {
    res.write(about);
})

function getHomePage(req, res) {
    return res.write(home)
}

server.listen("8080", () => {
    console.log("the server is running on port 8080");
})