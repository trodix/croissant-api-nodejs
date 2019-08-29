const routeTest = require('./controller/routeTest');
const cors = require('cors');
const bodyParser = require('body-parser');


module.exports = function (app) {

    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:443');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);

        next();
    });


    app.use(cors());
    app.use(bodyParser({limit: '500mb'}));
    app.use(bodyParser.json({type: '*/*'}));
    app.use(bodyParser.json({limit: '500mb'}));
    app.use(bodyParser.urlencoded({limit: '500mb', extended: true}));


    app.get('/v1/players', routeTest.getPlayers);
    app.get('/v1/rules', routeTest.getRules);
    app.get('/v1/paydays', routeTest.getPaydays);

};