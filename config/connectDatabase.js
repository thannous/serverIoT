/**
 * Module dependencies.
 */
var _ =         require('lodash');
var mongoose =  require('mongoose');
/**
 * connectDatabase.js
 *
 * @description :: configure database and connect
 **/


module.exports = function connectDatabase() {

    var self = this;
    var connect = function(){
        mongoose.connect('mongodb://localhost/baby', function (err) {
            console.log('mongodb://localhost/baby')
            if (err) {
                throw err;
                self.stop(err);
            }
        });
    }
    connect();

    mongoose.connection.on('error', console.log);
    mongoose.connection.on('disconnected', connect);

};

