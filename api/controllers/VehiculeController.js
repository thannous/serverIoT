/**
 * Module dependencies
 */

var Vehicule =  require('../models/Vehicule');
var Marque =    require('../models/Marque');
var async =     require('async');
var _ =         require('lodash');

/**
 * VehiculeController
 *
 * @description :: Server-side logic for managing vehicules
 * @help        ::
 */


module.exports = {
    // GET route for /vehicules
    getAllVehicules: function (req, res, next) {
        Vehicule.find(function (err, movies) {
            if (err) {
                return res.send(err);
            }
            res.json(movies);
        })
    },
    // POST route for /vehicule
    saveVehicule: function (req, res) {
        var marqueId = {};
        async.waterfall([
                function (cb) {
                    // Save Vehicule
                    var vehiculeBody = {
                        name: req.body.name,
                        type: req.body.type,
                        _marque: req.body._marque ? req.body._marque : null
                    };
                    var vehicule = new Vehicule(vehiculeBody);
                    //save vehicule
                    vehicule.save(function (err, vehicule) {
                        cb(err, vehicule);
                    });

                },
                function (vehicule, cb) {
                    //If there is a marque
                    //add this new vehicule in the marque
                    Marque.findOne({_id: req.body._marque}, function (err, marque) {
                        if (marque) {
                            marque.vehicules.push(vehicule._id);
                            // save the marque
                            marque.save(function (err) {
                                cb(err, vehicule)
                            });
                        } else{
                            //TODO throw err : marque no existe
                        }
                    });
                    cb(null, vehicule)
                }],
                function (err, vehicule) {
                    if (err) {
                        if (err.code === 11000) {
                            return res.status(403).json('Vehicule\'s name already exists');
                        } else
                            return res.status(500);
                    }
                    res.status(201).json(vehicule);
                }
        )
    },
    // GET route for /vehicule/:id
    getVehiculeById: function (req, res) {
        Vehicule.findOne({_id: req.params.id}, function (err, vehicule) {
            if (err) {
                return res.send(err);
            }
            res.json(vehicule);
        });
    },
    // PUT route for /vehicule/:id
    updateVehicule: function (req, res) {
        Vehicule.findOne({_id: req.params.id}, function (err, vehicule) {
            if (err) {
                return res.send(err);
            }

            var newMarque = req.body._marque;
            var oldMarque = vehicule._marque ? vehicule._marque._id : "";

            //compare if user change the marque
            if (oldMarque && newMarque !== oldMarque) {
                //pull off vehicule of this old marque
                Marque.findByIdAndUpdate(oldMarque, {
                    '$pull': {'vehicules': vehicule._id}
                }, function (err, marque) {
                    //Todo gestion err
                });
                //puT vehicule IN its new marque
                Marque.findByIdAndUpdate(newMarque, {
                    '$push': {'vehicules': vehicule._id}
                }, function (err, marque) {
                    //Todo gestion err
                });
            }
            for (var key in req.body) {
                vehicule[key] = req.body[key];
            }
            vehicule.save(function (err, vehicule) {
                if (err) {
                    return res.send(err);
                }
                res.status(200).json(vehicule);
            });
        });
    },
    // DELETE route for /vehicule/:id
    deleteVehicule: function (req, res) {
        Vehicule.remove({
            _id: req.params.id
        }, function (err) {
            if (err) {
                return res.send(err);
            }
            res.status(204).send();
        });
    }
};