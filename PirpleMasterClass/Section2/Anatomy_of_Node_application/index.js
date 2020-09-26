/*
 * Title: Basic Node Example
 * Description: Simple file that declares a few functions and invokes them.
 * Author: Leslie Lewis
 * Date: 10/24/17
 *
 */

 // Dependencies
 var mathLib = require('./lib/math')
 var jokesLib = require('./lib/jokes')

 // app object
 var app = {}

 // Configuration
 app.config = {
     'timeBetweenJokes' : 1000
 };

 // Function that prints a random joke
 app.printAJoke = function(){

    // Get all the Jokes
    var allJokes = jokesLib.allJokes();

    // get the length of the jokes
    var numberOfJokes = allJokes.length;

    // pick a random number between 1 and the number of jokes
    var randomNumbrer = mathLib.getRandomNumber(1,numberOfJokes)

    // get the joke at that position in the array (menos uno)
    var selectedJoke = allJokes[randomNumbrer - 1]

    console.log(selectedJoke)
 }

 // Function that loops indefinitely, calling the printAJoke function as it goes
 app.indefiniteLoop = function(){
     // Create the interval, using the config variable defined above
     setInterval(app.printAJoke, app.config.timeBetweenJokes)
 };

// Invoke the loop
app.indefiniteLoop();