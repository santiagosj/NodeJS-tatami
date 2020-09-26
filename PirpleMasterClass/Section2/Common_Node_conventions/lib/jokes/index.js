/**
 * comment section:
 * Description: Utility libray for getting a list of jokes
 * Author: Leslie Lewis
 * Date: 24/10/2017
 * 
 */

 // Dependencies
 var fs = require('fs')

 // app object
 var jokes = {}

 // Get all the jokes and return them to the user
 jokes.allJokes = function(){

    // Read the text file containing the jokes
    var fileContents = fs.readFileSync(`${__dirname}/jokes.txt`, 'utf-8')
   
    // Turn the string into an array
    var arrayOfJokes = fileContents.split(/\r?\n/);

    // return the array
    return arrayOfJokes;
}

// Export the library
module.exports = jokes;