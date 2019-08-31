const cors = require('cors');
const bodyParser = require('body-parser');

const playerController = require('./controller/playerController');
const ruleController = require('./controller/ruleController');
const paydayController = require('./controller/paydayController');




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


    app.get('/v1/players', playerController.getPlayers);
    app.get('/v1/players/:id', playerController.getOnePlayer);
    app.get('/v1/players/:id/paydays', playerController.getOnePlayerPaydays);
    app.post('/v1/players', playerController.createPlayer);
    app.put('/v1/players/:id', playerController.updateOnePlayer);
    app.delete('/v1/players/:id', playerController.deleteOnePlayer);

    app.get('/v1/rules', ruleController.getRules);
    app.get('/v1/rules/:id', ruleController.getOneRule);
    app.post('/v1/rules', ruleController.createRule);
    app.put('/v1/rules/:id', ruleController.updateOneRule);
    app.delete('/v1/rules/:id', ruleController.deleteOneRule);

    app.get('/v1/paydays', paydayController.getPaydays);
    app.get('/v1/paydays/:id', paydayController.getOnePayday);
    app.post('/v1/paydays', paydayController.createPayday);
    app.put('/v1/paydays/:id', paydayController.updateOnePayday);
    app.delete('/v1/paydays/:id', paydayController.deleteOnePayday);

};