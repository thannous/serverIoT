/**
 * Module dependencies
 */
var express = require('express');        // call express
var app =     express();                 // define our app using express
var colors =  require('colors');



/**
 * Load configuration
 */
var config = require('./config/env/development.js');


/**
 * Construct an Api instance.
 *
 * @constructor
 *
 * @param {string} config
 */


function Api(config, app){

    /* Private Variable & function
     -------------------------------*/
    var self =     this;
    var db =       config.db;
    var databaseUse = "mongodb"
    var username = db.username;
    var password = db.password;
    var host =     db.host;
    var port =     db.port;
    var database = db.database;
    console.log(db);
    /* Public properties
     -------------------------------*/
    self.app =        app;
    self.versionApi = config.version;

    /* Privileged methods
     -------------------------------*/
    this.getUrlDatabase = function() {
            var url = databaseUse +'://' + username + ':' + password + '@' + host + ':' + port + '/' + database

            return url;
        }
};
/* Public Methods
 -------------------------------*/
/**
 * Config mongoDb
 *
 * @param
 * @return
 */
Api.prototype.connectDatabase = require('./config/connectDatabase');


/**
 * Config express
 *
 * @param {config} logger
 * @return {request}
 */
Api.prototype.configureExpress = require('./config/configureExpress');

/**
 * Stop server if mongo crash
 *
 * @param
 * @return
 */

Api.prototype.stop = function(err) {
    console.log("Issue  \n" + err);
    process.exit(1);
}

/**
 * Start server
 *
 * @param
 * @return
 */
Api.prototype.startServer = function(port) {
    var port = port || 3000
    this.app.listen(port,function(err){
        console.log("Connect to port :" + port);
    });
}

exports.Api = new Api(config, app);