/**
 * Module dependencies
 */


var Baby =    require('../models/Baby');
var async =     require('async');
var _ =         require('lodash');

/**
 * BabyController
 *
 * @description :: Server-side logic for managing baby
 * @help        ::
 */


module.exports = {
    // POST route for /baby
    getAllBaby: function (req, res) {
        Baby.find(function (err, babies) {
            if (err) {
                return res.send(err);
            }
            res.json(babies);
        });
    },
    // POST route for /baby
    saveBaby: function (req, res) {
        console.log("save baby : " + req.body)
        console.log(req.body)
        var baby = new Baby(req.body);

        baby.save(function (err, marque) {
            if (err) {
                return res.send(err);
            }
            res.status(201).send(marque);

        });
    },
    // GET route for /baby/:id
    getBabyById: function (req, res) {
        Baby.findOne({_id: req.params.id},
            function (err, baby) {
                if (err) {
                    return res.send(err);
                }
                res.json(baby);
            }
        );
    },
    // Update route for /baby/:id
    updateBaby: (function (req, res) {
        Baby.findOne({_id: req.params.id},
            function (err, baby) {
                if (err) {
                    return res.send(err);
                }
                for (var key in req.body) {
                    baby[key] = req.body[key];
                }
                // save the marque
                baby.save(function (err, baby) {
                    if (err) {
                        return res.send(err);
                    }
                    res.status(200).json(baby);
                });
            }
        );
    }),
    // DELETE route for /marque/:id
    deleteBaby: function (req, res) {
        Baby.remove({_id: req.params.id},
            function (err, baby) {
                if (err) {
                    return res.send(err);
                }

                res.status(204).send();
            }
        );
    }
};