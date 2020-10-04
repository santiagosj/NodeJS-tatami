/*
 * Primary file for API
 *
 */

 // Dependencies
 var http = require('http')
 var url = require('url')
 
// Configure the server to respond to all requests with a string
 var server = http.createServer(function(req, res){

    // parse the url
    var parsedUrl = url.parse(req.url, true)
    
    // Get the path
    var path = parsedUrl.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g,'');

    // Get the query string as an object
    var queryStringObject = parsedUrl.query;

    // Get the HTTP method
    var httpMethod = req.method.toLowerCase();

    // Get the Headers as an object
    var headers = req.headers

    // Send the response
    res.end('Parsing Headers\n');

    // Log the request/response
    console.log('Request received this header: ',headers)

 })

 server.listen(3000,function(){
    console.log('The server is up and running now');
 })