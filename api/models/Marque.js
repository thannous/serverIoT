/**
 * marque.js
 *
 * @description :: Model marque for mongodb
 *
 */
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var MarqueSchema  = new Schema({
    name :          { type : String, unique : true, required : true },
    vehicules :    [{ type: Schema.Types.ObjectId, ref: 'Vehicule' }]
});

/* populate vehicules in each marque */
var autoPopulateMarque = function (cb) {

    this.populate({
        path: 'vehicules',
        select: '_id, name , type'
    });
    cb()
};

/*define which query is populated*/
MarqueSchema.
    pre('findOne', autoPopulateMarque).
    pre('find', autoPopulateMarque);

module.exports = mongoose.model('Marque', MarqueSchema);