var express =   require('express');
var marques =   require('../api/controllers/MarqueController');

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

router.param('id', function(req, res, next){
    //TODO  id is valid ? before send to mongodb
    next()
});

var auth = function (req, res, next) {
    //TODO middleware auth
    next();
}

router.route('/').
    get(auth, marques.getAllMarque).
    post(auth, marques.saveMarque );

router.route('/:id').
    get(auth, marques.getMarqueById ).
    put(auth, marques.updateMarque).
    delete(auth, marques.deleteMarque );

module.exports = router;