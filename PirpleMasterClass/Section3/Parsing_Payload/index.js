/*
 * Primary file for API
 *
 */

 // Dependencies
 var http = require('http')
 var { StringDecoder } = require('string_decoder')
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

    var decoder = new StringDecoder('utf-8');
    var buffer = '';
    req.on('data',function(data){
       buffer += decoder.write(data)
    });
    req.on('end',function(){
        buffer += decoder.end()

         // Send the response
    res.end('Parsing payload(data)\n');

    // Log the request/response
    console.log('This is the payload(data): '+ buffer)

    })

 })

 server.listen(3000,function(){
    console.log('The server is up and running now');
 })