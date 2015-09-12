/**
 * vehicule.js
 *
 * @description :: Model vehicule for mongodb
 *
 */


var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var VehiculeSchema  = new Schema({
    name    :      { type : String, unique : true, required : true },
    type    :      String,
    _marque  :      { type: Schema.Types.ObjectId, ref: 'Marque'}
});


/* populate marque in each vehicule */
var autoPopulateVehicule = function (cb) {
    this.populate({
        path: '_marque',
        select: 'name'
    });
    cb()
};

/*define which query is populated*/
VehiculeSchema.
    pre('findOne', autoPopulateVehicule).
    pre('find', autoPopulateVehicule);


module.exports = mongoose.model('Vehicule', VehiculeSchema);