/**
 * Module dependencies.
 */
var bodyParser =    require('body-parser');
var logger =        require('../logger')

//route dependence
var automobiles =   require('../router/vehiculeRouter');
var marques =       require('../router/marqueRouter');
var babies =       require('../router/babyRouter');

/**
 * configureExpress.js
 *
 * @description :: configure express middleware
 **/

module.exports = function configureExpress() {

    var self = this;

    /**
     * middleware
     */

    // parsing form data and use qs lib for later
    // TODO set only on request POST and PUT
    self.app.use(bodyParser.urlencoded({extended: true}));
    self.app.use(bodyParser.json());

    // log for dev debbug (TODO use morgan)
    self.app.use(logger);

    self.app.use(function (req, res, next) {  // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        // Pass to next layer of middleware
        next();
    });


    /**
     * configure express router ...
     */
    self.app.get('/api/v1/', function (req, res) {
        res.status(200).send("ok api marche")
    });
    self.app.use('/api/' + this.versionApi +'/vehicule', automobiles);
    self.app.use('/api/' + this.versionApi + '/marque', marques);
    self.app.use('/api/' + this.versionApi + '/baby',babies);
}

