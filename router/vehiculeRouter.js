var express =       require('express');
var automobiles =   require('../api/controllers/VehiculeController');

var router = express.Router();

/* CRUD Vehicule
 *  following routes:                                             *
 *  :::::::::::::::::::::::::::::::::::::::::::::::::::::::       *
 *  GET /vehicules                                                *
 *  GET /vehicule/:id                                             *
 *  POST /vehicules                                               *
 *  PUT /vehicule/:id                                             *
 *  DELETE /vehicule/:id                                          *
*/


/**
 * check user privilege for this route
 */
var auth = function (req, res, next) {
    //TODO middleware auth
     next();
}

router.param('id', function(req, res, next){
    //TODO  id is valid ? before send to mongodb
    next();
});

router.route('/').
    get(auth, automobiles.getAllVehicules).
    post(auth, automobiles.saveVehicule );

router.route('/:id').
    get(auth, automobiles.getVehiculeById).
    put(auth, automobiles.updateVehicule).
    delete(auth, automobiles.deleteVehicule );

module.exports = router;