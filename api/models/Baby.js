/**
 * marque.js
 *
 * @description :: Model marque for mongodb
 *
 */
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var BabySchema  = new Schema({
    name :          { type : String},
    temp :          { type : Number},
    sensor:         { type : Number}
});




module.exports = mongoose.model('Baby', BabySchema);