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
    temp :          { type : String}
});




module.exports = mongoose.model('Baby', BabySchema);