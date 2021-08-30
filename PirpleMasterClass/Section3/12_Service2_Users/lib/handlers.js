/*
 * Request Handlers
 *
 */

// Dependencies


// Define all the handlers
var handlers = {};

handlers.user = function (data, callback) {
    var aceptableMethods = ['post', 'get', 'put', 'delete']
    if (aceptableMethods.indexOf(data.method) > -1) {
        handlers._users[data.method](data, callback)
    } else {
        callback(405)
    }
}

handlers._users = {}

handlers._users.post = function (data, callback) { }
handlers._users.get = function (data, callback) { }
handlers._users.put = function (data, callback) { }
handlers._users.delete = function (data, callback) { }

// Ping handler
handlers.ping = function (data, callback) {
    callback(200);
};

// Not found handler
handlers.notFound = function (data, callback) {
    callback(404);
};

// Export the handlers
module.exports = handlers;