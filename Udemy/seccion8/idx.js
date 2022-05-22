const http = require("http");
const fs = require("fs");

const home = fs.readFileSync("./index.html");
const about = fs.readFileSync("./about.html");

http.createServer((request, response) => {
    const { url } = request;
    if (url === "/") {
        response.removeHeader("200", { "Content-type": "text/html" })
        response.write(home);
    } else if (url === "/about") {
        response.removeHeader("200", { "Content-type": "text/html" })
        response.write(about);
    } else {
        response.removeHeader("404", { "Content-type": "text/html" })
        response.write("Not_Found");
    }
    response.end();
}).listen("8080");