/*
 * Primary file for API
 *
 */

// Dependencies
var http = require('http');
var url = require('url')

 // Configure the server to respond to all requests with a string
var server = http.createServer(function(req,res){
  
 // Parse the url Parsing the URL string using the Legacy API:
 var parsedUrl =  url.parse(req.url,true);

 // Get the path
 var path = parsedUrl.pathname;
 var trimmedPath = path.replace(/^\/+|\/+$/g,'');

    // Send the response
    res.end('Holis!\n');
    // Log the request/response
    console.log(`Request received on path: ${trimmedPath}`)
});

var port = 3000
// Start the server
server.listen(port,function(){
  console.log('The server is up and running now on port: ' + port );
});
