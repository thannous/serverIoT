/**
 * Module dependencies
 */

var Vehicule =  require('../models/Vehicule');
var Marque =    require('../models/Marque');
var async =     require('async');
var _ =         require('lodash');

/**
 * MarqueController
 *
 * @description :: Server-side logic for managing marque
 * @help        ::
 */


module.exports = {
    // POST route for /marque
    getAllMarque: function (req, res) {
        Marque.find(function (err, marques) {
            if (err) {
                return res.send(err);
            }
            res.json(marques);
        });
    },
    // POST route for /marque
    saveMarque: function (req, res) {
        var marque = new Marque(req.body);

        marque.save(function (err, marque) {
            if (err) {
                return res.send(err);
            }
            res.status(201).send(marque);

        });
    },
    // GET route for /marque/:id
    getMarqueById: function (req, res) {
        Marque.findOne({_id: req.params.id},
            function (err, marque) {
                if (err) {
                    return res.send(err);
                }
                res.json(marque);
            }
        );
    },
    // DELETE route for /marque/:id
    updateMarque: (function (req, res) {
        Marque.findOne({_id: req.params.id},
            function (err, marque) {
                if (err) {
                    return res.send(err);
                }
                for (var key in req.body) {
                    marque[key] = req.body[key];
                }
                // save the marque
                marque.save(function (err, marque) {
                    if (err) {
                        return res.send(err);
                    }
                    res.status(200).json(marque);
                });
            }
        );
    }),
    // DELETE route for /marque/:id
    deleteMarque: function (req, res) {
        Marque.remove({_id: req.params.id},
            function (err, marque) {
                if (err) {
                    return res.send(err);
                }

                res.status(204).send();
            }
        );
    }
};