/**
 * Module dependencies
 */

var port    = 3000;
var expect  = require('chai').expect;
var request = require('supertest');

var mongoose = require('mongoose');

/**
 *  Variable temporaire
 */

var api         = request('http://localhost:3000/api/v1');

var id_vehicule,
    id_vehicule1= "";
var id_marque,
    id_marque1,
    id_marque2 = "";
var id_baby = "";


describe('Init', function() {

    before('Drop database',function (done) {
        mongoose.connect('mongodb://localhost/baby', function () {
            mongoose.connection.db.dropDatabase(function () {
                done();
            })
        })
    })
    describe('Api test', function(done){

        it ('Should return response 200', function(done){
            api.get('/').expect(200, done);
        });
            it ('GET all', function(done){
                api.get('/baby').
                    set('Accept', 'application/json').
                    expect('Content-Type', /json/).
                    expect(200).
                    end(function(err, res){
                        if (err) return done(err);
                        done()
                    });
            });

            /*  -----------------------  */
            it ('POST baby1', function(done){
                api.post('/baby').
                    send({ name: 'Nicolas', temp: '38'}).
                    expect(201).
                    end(function(err, res){
                        if (err) return done(err);
                        id_baby = res.body._id;

                        done()
                    });
            });
            it ('POST baby2', function(done){
                api.post('/baby').
                    send({ name: 'Francois', temp: '38'}).
                    expect(201).
                    end(function(err, res){
                        if (err) return done(err);
                        id_baby = res.body._id;

                        done()
                    });
            });
            it ('POST baby3', function(done){
                api.post('/baby').
                    send({ name: 'Thanh', temp: '37.2'}).
                    expect(201).
                    end(function(err, res){
                        if (err) return done(err);
                        id_baby = res.body._id;

                        done()
                    });
            });
            it ('POST baby4', function(done){
                api.post('/baby').
                    send({ name: 'Emmanuelle', temp: '39'}).
                    expect(201).
                    end(function(err, res){
                        if (err) return done(err);
                        id_baby = res.body._id;

                        done()
                    });
            });
            it ('POST baby5', function(done){
                api.post('/baby').
                    send({ name: 'Lenaic', temp: '37'}).
                    expect(201).
                    end(function(err, res){
                        if (err) return done(err);
                        id_baby = res.body._id;

                        done()
                    });
            });
            it ('POST baby6', function(done){
                api.post('/baby').
                    send({ name: 'Pierre', temp: '37'}).
                    expect(201).
                    end(function(err, res){
                        if (err) return done(err);
                        id_baby = res.body._id;

                        done()
                    });
            });
            it ('POST baby7', function(done){
                api.post('/baby').
                    send({ name: 'Titi', temp: '37.5'}).
                    expect(201).
                    end(function(err, res){
                        if (err) return done(err);
                        id_baby = res.body._id;

                        done()
                    });
            });

            /*  -----------------------  */
        



            it ('PUT', function(done){

                console.log(id_baby);
                api.put('/baby/'+ id_baby).
                    send({ name: 'teo', temp: '36' , _marque: id_marque}).
                    expect(200).
                    end(function(err, res){
                        if (err) return done(err);
                        expect(res.body._id).to.equal(id_baby);
                        expect(res.body.name).to.equal('teo');
                        expect(res.body.temp).to.equal('36');
                        done()
                });
            });


    });
});



