#!/usr/bin/env node

/**
 * Module dependencies.
 */

var Api = require('../app').Api;
var http = require('http');
var async = require('async')

/**
 * Connection database ...
 */
Api.connectDatabase();

/**
 * Configure database ...
 */
Api.configureExpress();


/**
 * Get port from environment and start express server
 */
var port = normalizePort(process.env.PORT || '3000');
Api.startServer(port);


/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Create HTTP server.
 */

