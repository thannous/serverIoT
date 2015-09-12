var express =   require('express');
var baby =   require('../api/controllers/BabyController');

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
    get(auth, baby.getAllBaby).
    post(auth, baby.saveBaby);

router.route('/:id').
    get(auth, baby.getBabyById ).
    put(auth, baby.updateBaby).
    delete(auth, baby.deleteBaby );

module.exports = router;